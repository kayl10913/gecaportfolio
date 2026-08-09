import healthNews from './videos/Health News.mp4';
import kwentongPangbataVO from './videos/Kwentong Pangbata V.O.mp4';
import newsReportingVO from './videos/News Reporting V.O.mp4';
import showbizNewsVO from './videos/Showbiz News V.O.mp4';

export const videoAssets = {
  healthNews,
  kwentongPangbataVO,
  newsReportingVO,
  showbizNewsVO,
};

export const siteVideos = [
  {
    id: 'health-news',
    title: 'Balitang Pangkakalusugan',
    subtitle: 'Health News Segment',
    description:
      'Health news hosting for Balisong Channel — on-camera delivery and segment production.',
    category: 'Hosting',
    src: healthNews,
  },
  {
    id: 'news-reporting-vo',
    title: 'News Reporting',
    subtitle: 'Voice-over Reel',
    description:
      'Voice-over work for news reporting packages — writing, verification, and broadcast delivery.',
    category: 'News Reporting',
    src: newsReportingVO,
  },
  {
    id: 'showbiz-news-vo',
    title: 'Showbiz News',
    subtitle: 'Voice-over Reel',
    description:
      'Entertainment news voice-over produced during my Balisong Channel news internship.',
    category: 'News Reporting',
    src: showbizNewsVO,
  },
  {
    id: 'kwentong-pangbata-vo',
    title: 'Kwentong Pangbata',
    subtitle: 'Voice-over Reel',
    description: 'Narration and voice-over for a storytelling-focused media piece.',
    category: 'Writing Portfolio',
    src: kwentongPangbataVO,
  },
];
