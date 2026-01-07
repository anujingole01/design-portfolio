import { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import './App.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main>
        <Hero />
        <ProjectGallery />

        <section id="about" className="about-section">
          <div className="container">
            <h2 className="display-font">ABOUT ME</h2>
            <p className="bio">
              I am a digital artisan based in Mumbai. I craft immersive digital experiences that blur the line between art and function.
              Specializing in brand identity, kinetic typography, and creative direction.
            </p>
          </div>
        </section>

        <footer>
          <div className="footer-content">
            <h2 className="display-font">LET'S TALK</h2>
            <div className="contact-links">
              <a href="mailto:contact@anujingole.com">EMAIL</a>
              <a href="#">INSTAGRAM</a>
              <a href="#">BEHANCE</a>
            </div>
            <div className="copy">
              &copy; 2026 ANUJ INGOLE
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
