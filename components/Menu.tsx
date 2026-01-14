
import React from 'react';
import { MENU_PREVIEW } from '../constants';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 md:py-32 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Coffee & Kitchen</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4">Simple, Honest Food</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-10">
            <h3 className="text-xl font-medium border-b border-stone-200 pb-2">A Taste of What We Offer</h3>
            {MENU_PREVIEW.map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-lg font-serif">{item.name}</h4>
                  <div className="h-px flex-grow mx-4 bg-stone-200 group-hover:bg-stone-300 transition-colors" />
                  <span className="text-stone-400 text-sm italic">{item.category}</span>
                </div>
                <p className="text-stone-500 text-sm font-light">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col justify-center items-center bg-white p-12 rounded-lg border border-stone-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <h3 className="text-2xl font-serif mb-4">Our Full Menu</h3>
            <p className="text-stone-500 mb-8 font-light leading-relaxed">
              We update our menu seasonally to reflect the freshest ingredients and local bakes.
            </p>
            <button className="px-8 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-all text-sm tracking-widest uppercase">
              View PDF Menu
            </button>
            <p className="text-stone-400 text-xs mt-4 italic">Estimated pricing: £1 – £10 per person</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
