
import React from 'react';
import { BRAND } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollTo('hero')} 
          className="text-xl md:text-2xl font-serif font-semibold tracking-tight"
        >
          {BRAND.name}
        </button>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-stone-600">
          <button onClick={() => scrollTo('about')} className="hover:text-stone-900 transition-colors">About</button>
          <button onClick={() => scrollTo('menu')} className="hover:text-stone-900 transition-colors">Menu</button>
          <button onClick={() => scrollTo('visit')} className="hover:text-stone-900 transition-colors">Visit Us</button>
        </div>

        <button 
          onClick={() => scrollTo('visit')}
          className="bg-stone-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-700 transition-all"
        >
          Find Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
