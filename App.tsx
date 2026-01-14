
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Menu from './components/Menu';
import Space from './components/Space';
import Visit from './components/Visit';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-stone-200">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Reviews />
        <Menu />
        <Space />
        <Visit />
      </main>
      <Footer />
    </div>
  );
};

export default App;
