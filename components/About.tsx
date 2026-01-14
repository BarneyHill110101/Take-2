
import React from 'react';
import { IMAGES } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative group order-2 lg:order-1"
        >
          <div className="absolute -inset-4 border border-stone-200 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700" />
          <img 
            src={IMAGES.people} 
            alt="People enjoying coffee and conversation at Café at the Cross" 
            className="rounded-sm shadow-2xl grayscale-[0.1] hover:grayscale-0 transition-all duration-1000 w-full object-cover aspect-[4/5] md:aspect-[3/2] lg:aspect-[4/5]"
          />
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-sm shadow-lg hidden md:block">
            <p className="text-stone-800 font-serif italic text-lg">A moment of calm.</p>
          </div>
        </motion.div>
        
        <div className="space-y-8 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mt-4">
              A sanctuary tucked away <br />within a historic church.
            </h2>
          </motion.div>
          
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
            <p>
              Located in the heart of Chester's Roman-heritage city centre, Café at the Cross is more than just a coffee shop. We are a community-focused haven set within the stunning architectural surroundings of a historic church.
            </p>
            <p>
              Whether you’re a local needing a regular spot, a visitor exploring the Eastgate Clock and Roman Walls, or simply a passer-by seeking refuge from the city rush — we offer a space to pause, reflect, and enjoy simple, honest food.
            </p>
            <p className="italic font-serif border-l-2 border-stone-200 pl-6 py-2 text-stone-800">
              "A peaceful pause in the heart of the city."
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="pt-4 flex items-center gap-4 text-stone-400"
          >
            <div className="h-px w-12 bg-stone-200" />
            <span className="text-xs uppercase tracking-[0.3em]">est. in the heart of chester</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
