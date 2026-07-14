import { useState } from 'react';
import Navbar from './components/Navbar';
import CanvasParticles from './components/CanvasParticles';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Education from './components/Sections/Education';
import Training from './components/Sections/Training';
import Contact from './components/Sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
          {/* Animated Particles Mesh */}
          <CanvasParticles />

          {/* Sticky Scroll Progress Navbar */}
          <Navbar />

          {/* Main Content Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Training />
            <Contact />
          </main>

          {/* Conditional Floating Scroll Button */}
          <BackToTop />
        </div>
      )}
    </>
  );
}
