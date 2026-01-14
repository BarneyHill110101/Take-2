
import React from 'react';
import { BRAND } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-serif">{BRAND.name}</h2>
          <p className="text-stone-400 font-light italic max-w-xs mx-auto md:mx-0">
            "A calm corner in the heart of the city."
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 text-sm uppercase tracking-widest text-stone-400 font-medium">
          <div className="space-y-4">
            <h4 className="text-stone-200 border-b border-stone-800 pb-2">Connect</h4>
            <a href="#" className="block hover:text-white transition-colors">Instagram</a>
            <a href="#" className="block hover:text-white transition-colors">Facebook</a>
          </div>
          <div className="space-y-4">
            <h4 className="text-stone-200 border-b border-stone-800 pb-2">Support</h4>
            <a href="mailto:hello@cafeatthecross.co.uk" className="block hover:text-white transition-colors">Email Us</a>
            <a href={`tel:${BRAND.phone.replace(/\s+/g, '')}`} className="block hover:text-white transition-colors">{BRAND.phone}</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-500 tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Café at the Cross. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-stone-300 transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
