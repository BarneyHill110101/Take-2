
import React from 'react';
import { IMAGES } from '../constants';

const Space: React.FC = () => {
  return (
    <section id="space" className="py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">The Setting</h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
              <p>
                There is a unique stillness here. The high vaulted ceilings, the gentle play of natural light through old windows, and the respectful hush of the historic interior create an atmosphere of immediate calm.
              </p>
              <p>
                Our café is designed for every kind of moment. Whether you're meeting a lifelong friend, seeking a quiet hour for reflection, or simply passing through the city and needing a rest — you are truly welcome here.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-6 bg-stone-50 rounded text-center">
                <span className="block text-2xl font-serif mb-1">Historic</span>
                <span className="text-xs uppercase tracking-widest text-stone-400">Architecture</span>
              </div>
              <div className="p-6 bg-stone-50 rounded text-center">
                <span className="block text-2xl font-serif mb-1">Quiet</span>
                <span className="text-xs uppercase tracking-widest text-stone-400">Reflection</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src={IMAGES.people} 
              alt="People enjoying a quiet moment in the cafe" 
              className="rounded-sm shadow-2xl object-cover aspect-[4/5] md:aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Space;
