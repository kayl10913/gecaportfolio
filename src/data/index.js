import { profilePic, cvPdf } from '../assets/photos';
import { videoAssets } from '../assets/media';
import { filmProductionPhotos, newsInternPhotos } from '../assets/experiencePhotos';
import { awardPhotos } from '../assets/awardPhotos';
import {
  featureWritingCover,
  featureWritingEnglish,
  featureWritingTagalog,
  socialMediaCaptions,
} from '../assets/journalism';

export const siteConfig = {
  name: 'Angelica D. Araño',
  title: 'Communication Graduate',
  tagline: 'BROADCAST JOURNALIST | NEWS REPORTER | MULTIMEDIA STORYTELLER',
  roles: ['Broadcast Journalist', 'News Reporter', 'Multimedia Storyteller'],
  intro:
    'Communication graduate with newsroom internship experience in television news production, field reporting, digital journalism, and multimedia storytelling. Skilled in gathering and verifying information, conducting interviews, writing news stories, and producing content for digital platforms. Committed to delivering accurate and ethical journalism.',
  email: 'aranoangelica4@gmail.com',
  phone: '0950-242-0093',
  location: 'Alitagtag, Batangas',
  social: {
    linkedin: 'https://www.linkedin.com/in/angelica-arano-9b0828277/',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    github: 'https://github.com',
  },
  portrait: profilePic,
  aboutPortrait: profilePic,
  heroCollage: [
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=60',
    'https://images.unsplash.com/photo-1478737270239-2f02ca77fc9c?w=400&q=60',
    'https://images.unsplash.com/photo-1495020689067-6b7a5c4b8f0e?w=400&q=60',
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=60',
    'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&q=60',
    'https://images.unsplash.com/photo-1611162617474-5b21e469e113?w=400&q=60',
  ],
  resumeUrl: cvPdf,
  cvUrl: cvPdf,
};

export const aboutContent = {
  headline: 'Turning Ideas into Impactful Stories',
  bio: `Communication graduate with newsroom internship experience in television news production, field reporting, digital journalism, and multimedia storytelling. Skilled in gathering and verifying information, conducting interviews, writing news stories, and producing content for digital platforms.

Committed to delivering accurate and ethical journalism in every story I tell.`,
  education: {
    title: 'Bachelor of Arts in Communication',
    subtitle:
      'Batangas State University – The National Engineering University, Lipa Campus (2022 – 2026)',
  },
  careerGoal:
    'Deliver accurate, ethical journalism across broadcast, digital, and multimedia platforms.',
  interests: [
    'Field Reporting',
    'Broadcast Journalism',
    'Documentary Production',
    'News Writing',
    'TV Production',
  ],
  quickFacts: [
    { label: 'B.A. Communication, BSU Lipa', icon: 'graduation' },
    { label: 'Alitagtag, Batangas', icon: 'map' },
    { label: "Dean's Lister", icon: 'heart' },
    { label: 'Committed to ethical journalism', icon: 'shield' },
  ],
};

export const skillCategories = [
  {
    name: 'Journalism & Reporting',
    skills: [
      { name: 'Field Reporting', level: 92, icon: 'mic' },
      { name: 'News Writing', level: 90, icon: 'newspaper' },
      { name: 'Broadcast Journalism', level: 88, icon: 'tv' },
      { name: 'Interviewing', level: 90, icon: 'users' },
      { name: 'Digital Journalism', level: 87, icon: 'search' },
    ],
  },
  {
    name: 'Broadcast & Production',
    skills: [
      { name: 'Voice-over', level: 86, icon: 'volume' },
      { name: 'TV Production', level: 88, icon: 'video' },
      { name: 'Film Production', level: 85, icon: 'film' },
    ],
  },
  {
    name: 'Digital Tools',
    skills: [
      { name: 'Canva', level: 92, icon: 'layout' },
      { name: 'Microsoft Office', level: 90, icon: 'table' },
      { name: 'Google Workspace', level: 88, icon: 'cloud' },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    title: 'News Intern',
    company: 'Balisong Channel — News Department',
    period: 'June 2025 — July 2025',
    description:
      'Hands-on newsroom internship covering field reporting, studio reporting, and voice-over work for television and digital platforms.',
    responsibilities: [
      'Covered community events through on-site news gatherings',
      'Wrote news stories for social media platforms',
      'Produced news content under tight deadlines',
      'Conducted interviews and verified information from reliable sources',
      'Hosted the health news segment Balitang Pangkakalusugan',
      'Served as an entertainment news reporter and voice-over talent',
      'Supported newsroom operations and multimedia production under deadlines',
    ],
    photos: newsInternPhotos,
  },
  {
    id: 2,
    title: 'Treasurer',
    company: 'College of Arts and Sciences Student Council',
    period: '2025 — 2026',
    description: 'Managed student council finances and supported campus programs and initiatives.',
    responsibilities: [
      'Managed council finances and organizational records',
      'Supported student-led programs and campus initiatives',
    ],
    photos: [],
  },
  {
    id: 3,
    title: 'Production Manager & Camera Assistant',
    company: 'Long Drive (Film Project)',
    period: 'Academic Project',
    description:
      'Supported on-set production for Long Drive as production manager and camera assistant, helping coordinate workflow and capture.',
    responsibilities: [
      'Coordinated production workflow and on-set camera support',
      'Contributed to a film recognized as 3rd Best Film',
    ],
    photos: filmProductionPhotos,
  },
  {
    id: 4,
    title: 'Documentary Producer',
    company: 'Ang Kartilya ni Ka Ising',
    period: 'Academic Project',
    description: 'Led documentary planning, interviews, and post-production coordination.',
    responsibilities: [
      'Led documentary planning, interviews, and post-production coordination',
    ],
    photos: [],
  },
  {
    id: 5,
    title: 'Segment Host & Interviewer',
    company: 'Kwentong Wagi',
    period: 'Academic Project',
    description: 'Hosted segments and conducted on-camera interviews.',
    responsibilities: [
      'Hosted segments and conducted on-camera interviews',
    ],
    photos: [],
  },
  {
    id: 6,
    title: 'Production Design Team Leader',
    company: 'Praning',
    period: 'Academic Project',
    description: 'Led production design planning and visual storytelling for the project.',
    responsibilities: [
      'Led production design planning and visual storytelling for the project',
    ],
    photos: [],
  },
];

export const portfolioProjects = [
  {
    id: 1,
    title: 'Balitang Pangkakalusugan',
    category: 'Hosting',
    description: 'Hosted the health news segment for Balisong Channel.',
    image:
      'https://images.unsplash.com/photo-1478737270239-2f02ca77fc9c?w=800&q=80',
    video: videoAssets.healthNews,
    tech: ['Broadcast Hosting', 'Health Reporting', 'On-camera'],
    gallery: [],
    details:
      'News internship role hosting Balitang Pangkakalusugan with on-camera delivery and health-focused reporting.',
  },
  {
    id: 2,
    title: 'News Reporting',
    category: 'News Reporting',
    description: 'Voice-over reel for news reporting packages at Balisong Channel.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    video: videoAssets.newsReportingVO,
    tech: ['Field Reporting', 'News Writing', 'Voice-over'],
    gallery: [],
    details:
      'Covered community events on-site, wrote stories for social platforms, and delivered voice-over for news packages.',
  },
  {
    id: 3,
    title: 'Showbiz News',
    category: 'News Reporting',
    description: 'Entertainment news voice-over from my Balisong Channel internship.',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e469e113?w=800&q=80',
    video: videoAssets.showbizNewsVO,
    tech: ['Voice-over', 'Entertainment News', 'Broadcast'],
    gallery: [],
    details:
      'Served as entertainment news reporter and voice-over talent for showbiz segments during my news internship.',
  },
  {
    id: 4,
    title: 'Kwentong Pangbata',
    category: 'Writing Portfolio',
    description: 'Voice-over narration for a storytelling-focused media piece.',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    video: videoAssets.kwentongPangbataVO,
    tech: ['Voice-over', 'Narration', 'Storytelling'],
    gallery: [],
    details: 'Produced voice-over narration supporting narrative storytelling and audience engagement.',
  },
  {
    id: 12,
    title: 'Mobile Journalism',
    category: 'News Reporting',
    description: 'News production shot and edited on a smartphone for digital reporting.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    video: videoAssets.mobileJournalism,
    tech: ['Mobile Journalism', 'Digital Reporting', 'Video Production'],
    gallery: [],
    details:
      'A mobile journalism piece covering the full news workflow on a smartphone — shooting, reporting, and editing content for digital platforms.',
  },
  {
    id: 5,
    title: 'Long Drive',
    category: 'Video Editing',
    description: 'Production Manager & Camera Assistant — 3rd Best Film.',
    image:
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    tech: ['Film Production', 'Camera', 'Production Management'],
    gallery: [
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80',
    ],
    details:
      'Academic film project where I served as Production Manager and Camera Assistant; recognized as 3rd Best Film.',
  },
  {
    id: 6,
    title: 'Ang Kartilya ni Ka Ising',
    category: 'Video Editing',
    description: 'Documentary producer for a narrative documentary project.',
    image:
      'https://images.unsplash.com/photo-1495020689067-6b7a5c4b8f0e?w=800&q=80',
    tech: ['Documentary', 'Interviews', 'Production'],
    gallery: [
      'https://images.unsplash.com/photo-1495020689067-6b7a5c4b8f0e?w=1200&q=80',
    ],
    details: 'Produced a documentary highlighting storytelling through research, interviews, and post-production.',
  },
  {
    id: 7,
    title: 'Kwentong Wagi',
    category: 'Hosting',
    description: 'Segment host and interviewer for a campus media production.',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    tech: ['Hosting', 'Interviewing', 'Broadcast'],
    gallery: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80',
    ],
    details: 'Hosted segments and conducted interviews for the Kwentong Wagi production.',
  },
  {
    id: 8,
    title: 'Praning',
    category: 'Graphic Design',
    description: 'Production Design Team Leader for a film production.',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e469e113?w=800&q=80',
    tech: ['Production Design', 'Visual Storytelling', 'Team Leadership'],
    gallery: [
      'https://images.unsplash.com/photo-1611162617474-5b21e469e113?w=1200&q=80',
    ],
    details:
      'Led the production design team, shaping visual identity and on-screen aesthetics for the project.',
  },
  {
    id: 9,
    title: 'From Rock Bottom to Gradwaiting',
    category: 'Writing Portfolio',
    description: 'English feature writing on perseverance, academic struggle, and chasing a dream.',
    image: featureWritingCover,
    document: featureWritingEnglish,
    tech: ['Feature Writing', 'English', 'Human-Interest Story'],
    gallery: [],
    details:
      'A magazine-style feature following an IT student’s journey through financial hardship, remote learning, and night-shift work to reach his final semester and pursue a career as a systems analyst.',
  },
  {
    id: 10,
    title: 'Feature Writing (Tagalog)',
    category: 'Writing Portfolio',
    description: 'Tagalog feature article showcasing narrative writing in the local language.',
    image: featureWritingCover,
    document: featureWritingTagalog,
    tech: ['Feature Writing', 'Tagalog', 'Storytelling'],
    gallery: [],
    details:
      'Tagalog-language feature writing that highlights community-centered storytelling and audience-focused reporting.',
  },
  {
    id: 11,
    title: 'Social Media Captions',
    category: 'Writing Portfolio',
    description: 'Short-form captions crafted for digital news and social media platforms.',
    image: featureWritingCover,
    document: socialMediaCaptions,
    tech: ['Digital Journalism', 'Social Media', 'Copywriting'],
    gallery: [],
    details:
      'A collection of social media captions written for news and digital content, focused on clarity, engagement, and platform-appropriate tone.',
  },
];

export const portfolioCategories = [
  'All',
  'News Reporting',
  'Hosting',
  'Writing Portfolio',
  'Video Editing',
  'Graphic Design',
];

export const certificates = [
  {
    id: 1,
    title: 'Beacon of Service',
    type: 'Awards',
    image: awardPhotos.beaconOfService,
    date: 'July 2026',
  },
  {
    id: 2,
    title: 'Film Enthusiasts Award',
    type: 'Awards',
    image: awardPhotos.filmEnthusiasts,
    date: 'July 2026',
  },
  {
    id: 3,
    title: 'Class Leadership Award',
    type: 'Awards',
    image: awardPhotos.classLeadership,
    date: 'July 2026',
  },
  {
    id: 4,
    title: 'Outstanding Field Performance Award',
    type: 'Awards',
    image: awardPhotos.outstandingFieldPerformance,
    date: 'July 2026',
  },
  {
    id: 5,
    title: 'With Honors — GWA 1.7321',
    type: 'Awards',
    image: awardPhotos.withHonors,
    date: '1st Sem AY 2025–2026',
  },
  {
    id: 6,
    title: 'SineKatha 2025 — Film Awards',
    type: 'Awards',
    image: awardPhotos.sinekatha2025,
    date: 'December 2025',
  },
];

export const certificateFilters = ['All', 'Awards'];

export const experienceHighlight = {
  ...experiences[0],
  workPhotos: newsInternPhotos.slice(0, 4),
};

export const statistics = [
  { value: 5, suffix: '+', label: 'Leadership & Project Roles', icon: 'folder' },
  { value: 11, suffix: '', label: 'Key Media Skills', icon: 'article' },
  { value: 4, suffix: '', label: 'Film & Documentary Projects', icon: 'video' },
  { value: 3, suffix: '', label: 'Honors & Achievements', icon: 'trophy' },
  { value: 4, suffix: '', label: 'Years in Communication Program', icon: 'mic' },
];

export const testimonials = [];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];
