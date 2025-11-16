import type { PersonalInfo, Project, Experience, Skill, EducationInfo, NavLink, Citation, GalleryImage } from './types';

export const NAV_LINKS: NavLink[] = [
    { href: '#section-about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#citations', label: 'Citations' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
];

export const PERSONAL_INFO: PersonalInfo = {
    name: 'Tim Jason G. Gonzales',
    title: 'UI/UX Designer & Developer',
    location: 'Iloilo City, Philippines',
    email: 'kyotim23@gmail.com',
    social: {
        github: 'https://github.com/timjason23',
        linkedin: 'https://www.linkedin.com/in/tim-jason-gonzales-aa00aa368/',
        facebook: 'https://www.facebook.com/tim.jason.526/'
    },
    about: [
        "An innovative Information Technology graduate from Central Philippine University, majoring in Database Administration. I led the thesis project “SaveWins”, a mobile budgeting app that promotes better spending habits through intuitive design and data insights.",
        "Skilled in UI/UX development with HTML, Modern CSS, Bootstrap, and Flutter, and proficient in Python, C#, JavaScript, PHP, Dart, and MS SQL for full-stack development.",
        "A proven leader and collaborator, I’ve served as Vice Governor of the College of Computer Studies, an award-winning Board Member for the Ministry of Finance, and CFO of Dappli. These experiences — along with many others — reflect my passion for innovation, teamwork, and creating technology that makes a real impact."
    ],
    // TODO: Create an 'assets' folder in your project's root directory.
    // TODO: Add your profile picture to the 'assets' folder.
    // TODO: Replace 'profile.jpg' with the actual filename of your profile picture.
    imageUrl: './assets/profilevg.jpg', // <-- TODO: UPDATE THIS FILENAME
};

export const GALLERY_IMAGES: GalleryImage[] = [
    {
        src: '/assets/akwe.jpg',
        caption: 'CCS Provincial Council hosts College Aquaintance and Freshmen Orientation',
        category: 'Student Council'
    },
    {
        src: './assets/mental.jpg',
        caption: 'CCS Provincial Council hosts Mental Health Seminar',
        category: 'Student Council'
    },
    {
        src: './assets/warriorspit1.jpg',
        caption: 'CCS Provincial Council hosts Warriors Pit 2025',
        category: 'Student Council'
    },
    {
        src: './assets/leadership.jpg',
        caption: 'CCS Provincial Council holds Leadership Training and Team Building Activity',
        category: 'Student Council'
    },
    {
        src: './assets/inauguration.jpg',
        caption: 'CCS Provincial Council Elected Officials Inauguration',
        category: 'Student Council'
    },
    {
        src: './assets/studyhub.jpg',
        caption: 'CCS Provincial Council Study Hub initiative for Midterm Exams',
        category: 'Student Council'
    },
    {
        src: './assets/platform.jpg',
        caption: 'CCS Provincial Council Platform Check and Accomplished Projects',
        category: 'Student Council'
    },
    {
        src: './assets/welcome.jpg',
        caption: 'CCS Provincial Council Welcomes New Academic Year',
        category: 'Student Council'
    },
    {
        src: './assets/cipher1.jpg',
        caption: 'CCS Provincial Council Welcomes New Academic Year',
        category: 'Student Council'
    },
    {
        src: './assets/cipher2.jpg',
        caption: 'CCS Provincial Council Welcomes New Academic Year',
        category: 'Student Council'
    },
    {
        src: './assets/cipher3.jpg',
        caption: 'CCS Provincial Council Welcomes New Academic Year',
        category: 'Student Council'
    },
    {
        src: './assets/cipher4.jpg',
        caption: 'CCS Provincial Council Welcomes New Academic Year',
        category: 'Student Council'
    },
    {
        src: './assets/cipher5.jpg',
        caption: 'CCS Provincial Council Welcomes New Academic Year',
        category: 'Student Council'
    },
    {
        src: './assets/cipher6.jpg',
        caption: 'CCS Provincial Council Welcomes New Academic Year',
        category: 'Student Council'
    },
    {
        src: './assets/dappli1.jpg',
        caption: 'Dappli at Lightning Pitches at Visayas TECH PLANTER 2025',
        category: 'Startup Journey'
    },
    {
        src: './assets/dappli.jpg',
        caption: 'Dappli shines bright with Excellence and Apecs Awards',
        category: 'Startup Journey'
    },
    {
        src: './assets/outreach.jpg',
        caption: 'Another Great Moment',
        category: 'Outreaches'
    },
    {
        src: './assets/dappli2.jpg',
        caption: 'Serves as the Chief Financial Officer of Dappli',
        category: 'Startup Journey'
    },
    {
        src: '/assets/SGLG.jpg',
        caption: 'Most Outstanding Board Member and Ministry (Finance)',
        category: 'Awards and Recognition'
    },
    {
        src: '/assets/sigrab.jpg',
        caption: '2025 Sigrab Film Festival - Best Film',
        category: 'Awards and Recognition'
    },
    {
        src: '/assets/sigrab1.jpg',
        caption: '2025 Sigrab Film Festival - Best Film',
        category: 'Awards and Recognition'
    },
    {
        src: './assets/sigrabshoot.jpg',
        caption: '2025 Sigrab Film Festival0 - Shoot',
        category: 'Student Council'
    },
    {
        src: '/assets/DAR.jpg',
        caption: 'Regional DAR Pelikulagraryo 2025 Film Festival - Best Film',
        category: 'Awards and Recognition'
    },
    {
        src: '/assets/DARnational.jpg',
        caption: 'National DAR Pelikulagraryo 2025 Film Festival - Best Film',
        category: 'Awards and Recognition'
    }
];


export const EXPERIENCE: Experience[] = [
    {
        role: 'Producer',
        company: 'SIGRAB 2025 Film Entry',
        period: '2025',
        description: 'Led the production of the official film entry for the College of Computer Studies, "Ang Pulong sang mga Baboy," which won Best Film.',
        location: 'Iloilo City, Philippines'
    },
    {
        role: 'Vice Governor',
        company: 'College of Computer Studies - Central Philippine University',
        period: '2025 - 2026',
        description: 'Led student council initiatives, organized college-wide events, and represented the student body in academic and administrative meetings.',
        location: 'Iloilo City, Philippines'
    },
    {
        role: 'Producer',
        company: 'ARBO Category Film Entry',
        period: '2025',
        description: 'Served as the producer for the winning film, "Ang Pagtililipon sang mga Damgo," which received Best Film and also gained Regional and National recognition from the Department of Agrarian Reform.',
        location: 'Central Philippine University'
    },
    {
        role: 'Board Member',
        company: 'College of Computer Studies - Central Philippine University',
        period: '2024 - 2025',
        description: 'Part of the Ministry of Finance, recognized for excellence in governance and financial management at the CPUR’s Seal of Good Local Governance Awards. Awarded Most Outstanding Board Member and part of the Most Outstanding Ministry.',
        location: 'Iloilo City, Philippines'
    },
    {
        role: 'Chief Financial Officer',
        company: 'Dappli (CPUGAD Startup)',
        period: '2024 - Present',
        description: 'Overseeing financial operations and strategy for an emerging startup affiliated with CPUGAD.',
        location: 'Iloilo City, Philippines'
    },
    {
        role: 'Presidential Staff',
        company: 'Information Technology Students Organization',
        period: '2023 - 2024',
        description: 'Assisted the President in executing organizational plans and managing internal and external communications.',
        location: 'Central Philippine University'
    },
    {
        role: 'Staff',
        company: 'Ministry of Finance - College of Computer Studies',
        period: '2023 - 2024',
        description: 'Supported the financial operations of the college student council.',
        location: 'Central Philippine University'
    }
];

export const PROJECTS: Project[] = [
    {
        title: 'SaveWins - Budgeting App',
        description: 'As the Group Leader for our thesis, we developed a mobile application entitled “SaveWins: A Budgeting App for Improving User Spending Behavior.” The app helps users manage their finances better by promoting smarter spending habits through goal-setting and expense tracking.',
        tags: ['Flutter', 'Dart', 'UI/UX Design', 'Database'],
    },
    {
        title: 'Dappli - Food & Wellness App',
        description: 'A startup focused on creating groundbreaking tech solutions for food and wellness. As CFO, I contribute to the financial strategy that powers our innovative application development.',
        tags: ['Startup', 'UI/UX', 'Finance', 'Database'],
    }
];

export const SKILLS: { category: string; items: Skill[] }[] = [
    {
        category: 'Web & UI/UX',
        items: [
            { name: 'HTML & Modern CSS' },
            { name: 'JavaScript & TypeScript' },
            { name: 'React' },
            { name: 'Flutter & Dart' },
            { name: 'Bootstrap' },
            { name: 'UI/UX Prototyping' },
        ]
    },
    {
        category: 'Programming & Databases',
        items: [
            { name: 'Python' },
            { name: 'C#' },
            { name: 'PHP' },
            { name: 'MS SQL' },
            { name: 'Database Design' },
            { name: 'Database Management' },
        ]
    },
    {
        category: 'Leadership & Other',
        items: [
            { name: 'Leadership' },
            { name: 'Project Management' },
            { name: 'Financial Strategy' },
            { name: 'Git & GitHub' },
            { name: 'Agile Methodologies' },
        ]
    }
];

export const EDUCATION: EducationInfo[] = [
    {
        institution: 'Central Philippine University',
        degree: 'Bachelor of Science in Information Technology',
        period: '2022 - 2026',
        details: 'Majored in Database Administration. Led the development of the thesis project "SaveWins," a mobile budgeting application.'
    },
    {
        institution: 'Guimbal National High School',
        degree: 'With High Honors - Science, Technology, Engineering and Mathematics',
        period: 'S.Y 2020-2022',
        details: 'Graduated from the Senior High School program with high academic distinction.'
    },
    {
        institution: 'Guimbal National High School',
        degree: 'With Honors - Special Program in Science, Technology and Engineering',
        period: 'S.Y 2016-2020',
        details: 'Completed the Junior High School special science program with academic honors.'
    },
    {
        institution: 'Guimbal Central Elementary School',
        degree: 'With Honors - Special Science Class',
        period: 'S.Y 2010-2016',
        details: 'Graduated from the elementary special science class with honors.'
    }
];

export const CITATIONS: Citation[] = [
    {
        title: 'Qualified',
        issuer: 'Hyper Interdisciplinary Conference 2025 Iloilo',
        date: '2025',
        description: 'Dappli was selected to participate in this prestigious conference, recognizing its innovative potential.',
    },
    {
        title: 'Qualified',
        issuer: 'DOST 2025 AI Fest Lightning Talks',
        date: '2025',
        description: 'Dappli was selected to present at the AI Fest, showcasing our tech solutions to a wider audience.',
    },
    {
        title: 'Top 6 Lightning Pitcher',
        issuer: 'Visayas Techplanters 2025',
        date: '2025',
        description: 'Dappli was recognized as one of the top pitchers in the regional tech event.',
    },
    {
        title: 'Excellence Award & Apex Award',
        issuer: 'SKYBOUND: CPUGAD TBI Culminating Activity',
        date: '2025',
        description: 'Received for Dappli, recognizing groundbreaking tech solutions for food and wellness.',
    },
     {
        title: 'Best Film Award',
        issuer: 'SIGRAB 2025',
        date: '2025',
        description: 'Awarded for producing the official film entry of the College of Computer Studies, "Ang Pulong sang mga Baboy".',
    },
    {
        title: 'Most Outstanding Board Member',
        issuer: 'CPUR Seal of Good Local Governance Awards',
        date: '2025',
        description: 'Recognized for outstanding contributions and leadership as a Board Member for the Ministry of Finance.',
    },
    {
        title: 'Most Outstanding Ministry',
        issuer: 'CPUR Seal of Good Local Governance Awards',
        date: '2025',
        description: 'As a Board Member, was part of the Ministry of Finance, recognized for excellence in governance and financial management.',
    },
    {
        title: 'Best Film Award',
        issuer: 'Central Philippine University (ARBO Category)',
        date: '2025',
        description: 'Served as the producer for the winning film, "Ang Pagtililipon sang mga Damgo". The film also received Regional and National Recognition from the Department of Agrarian Reform.',
    },
    {
        title: 'Champion',
        issuer: 'Centralian Fest Philippine History Quiz Bee',
        date: '2024',
        description: 'Secured first place in the university-wide quiz bee.',
    }
];