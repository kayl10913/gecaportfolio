import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import ExperienceHighlight from '../components/ExperienceHighlight';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import FeaturedVideo from '../components/FeaturedVideo';
import Certificates from '../components/Certificates';
import Testimonials from '../components/Testimonials';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Portfolio />
        <ExperienceHighlight />
        <Experience />
        <Skills />
        <FeaturedVideo />
        <Certificates />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
