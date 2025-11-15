import React, { useState, useEffect } from 'react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILLS, EDUCATION } from '../constants';
import { CloseIcon } from './Icons';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
    </div>
);

interface GeneratorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SECTIONS = ['About Me', 'Project Description', 'Experience Blurb'];

const GeneratorModal: React.FC<GeneratorModalProps> = ({ isOpen, onClose }) => {
    const [selectedSection, setSelectedSection] = useState(SECTIONS[0]);
    const [customPrompt, setCustomPrompt] = useState('');
    const [generatedContent, setGeneratedContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [hasApiKey, setHasApiKey] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const checkApiKey = async () => {
                if (window.aistudio) {
                    const keyStatus = await window.aistudio.hasSelectedApiKey();
                    setHasApiKey(keyStatus);
                }
            };
            checkApiKey();
        }
    }, [isOpen]);
    
    const handleSelectKey = async () => {
        if (window.aistudio) {
            await window.aistudio.openSelectKey();
            // Assume key is selected after dialog closes
            setHasApiKey(true);
        } else {
            setError("AI Studio environment not detected.");
        }
    }

    const generateContent = async () => {
        setIsLoading(true);
        setError('');
        setGeneratedContent('');

        try {
            // Re-check for key before generation, just in case
            if (!window.aistudio || !(await window.aistudio.hasSelectedApiKey())) {
                 setError('Please select an API key before generating content.');
                 setIsLoading(false);
                 setHasApiKey(false);
                 return;
            }
            
            // Create a new instance right before the API call
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            
            let prompt = `You are a professional portfolio assistant. Generate content for a section of a front-end developer's portfolio. The developer's name is ${PERSONAL_INFO.name}. `;
            prompt += `Here is some existing info from the portfolio for context:\n`;
            prompt += `About: ${PERSONAL_INFO.about.join(' ')}\n`;
            prompt += `Projects: ${PROJECTS.map(p => `${p.title}: ${p.description}`).join(', ')}\n`;
            prompt += `Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company}`).join(', ')}\n`;
            prompt += `Skills: ${SKILLS.map(s => `${s.category}: ${s.items.map(i => i.name).join(', ')}`).join('; ')}\n`;
            prompt += `Education: ${EDUCATION.map(e => `${e.degree} from ${e.institution}`).join(', ')}\n\n`;

            switch (selectedSection) {
                case 'About Me':
                    prompt += `Generate a new, compelling paragraph for the "About Me" section. Make it professional but with a bit of personality.`;
                    break;
                case 'Project Description':
                    prompt += `Generate a concise and engaging description for a new portfolio project.`;
                    break;
                case 'Experience Blurb':
                    prompt += `Generate a summary of responsibilities and achievements for a new work experience entry.`;
                    break;
            }

            if (customPrompt) {
                prompt += `\n\nHere are some specific instructions from the user: "${customPrompt}".`;
            }
            
            prompt += `\n\nKeep the response to 2-3 sentences.`;

            const response: GenerateContentResponse = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            const text = response.text;
            setGeneratedContent(text);
        } catch (e: any) {
            if (e.message?.includes('Requested entity was not found.') || e.message?.includes('API key not valid')) {
                setError('Your API key is invalid or missing required permissions. Please select another key.');
                setHasApiKey(false);
            } else {
                setError('Failed to generate content. Please try again.');
            }
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-[#111111] border border-gray-800 rounded-lg shadow-xl p-8 w-full max-w-2xl relative text-gray-300"
                        initial={{ scale: 0.9, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: -20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400"
                            aria-label="Close modal"
                        >
                           <CloseIcon className="w-6 h-6" />
                        </button>
                        
                        <h2 className="text-2xl font-bold text-white mb-6">Generate Portfolio Content</h2>
                        
                        {!hasApiKey ? (
                            <div className="text-center">
                                <p className="mb-4 text-gray-400">To use the AI Assistant, you need to select a Google AI Studio API key.</p>
                                <p className="text-xs text-gray-500 mb-4">A link to billing documentation can be found at ai.google.dev/gemini-api/docs/billing</p>
                                <button
                                    onClick={handleSelectKey}
                                    className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition-colors"
                                >
                                    Select API Key
                                </button>
                                {error && <p className="text-red-400 mt-4">{error}</p>}
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="section" className="block text-sm font-medium text-gray-400 mb-2">Section to improve</label>
                                        <select 
                                            id="section" 
                                            value={selectedSection} 
                                            onChange={(e) => setSelectedSection(e.target.value)}
                                            className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-yellow-400 focus:border-yellow-400"
                                        >
                                            {SECTIONS.map(section => (
                                                <option key={section} value={section}>{section}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="prompt" className="block text-sm font-medium text-gray-400 mb-2">Additional context (optional)</label>
                                        <textarea 
                                            id="prompt" 
                                            rows={3} 
                                            value={customPrompt}
                                            onChange={(e) => setCustomPrompt(e.target.value)}
                                            placeholder="e.g., mention my expertise in building accessible UI components"
                                            className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-yellow-400 focus:border-yellow-400 resize-none"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button 
                                        onClick={generateContent}
                                        disabled={isLoading}
                                        className="w-full px-6 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex justify-center items-center"
                                    >
                                        {isLoading ? <LoadingSpinner /> : 'Generate'}
                                    </button>
                                </div>
                                
                                {(generatedContent || error) && (
                                    <div className="mt-6 p-4 bg-gray-900/50 border border-gray-700 rounded-md">
                                        {error && <p className="text-red-400">{error}</p>}
                                        {generatedContent && <p className="text-gray-300 whitespace-pre-wrap">{generatedContent}</p>}
                                    </div>
                                )}
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GeneratorModal;