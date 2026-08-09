import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    localStorage.setItem('portfolio-theme', 'dark');
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen onComplete={finishLoading} />}</AnimatePresence>
      <ScrollProgress />
      <CursorGlow />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
