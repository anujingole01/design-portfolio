import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Tools from './components/Tools';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './App.css';

function App() {
  const lenisRef = useRef()

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <Services />
        <Process />
        <Tools />
        <ProjectGallery />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}

export default App;
