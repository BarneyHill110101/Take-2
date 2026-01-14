
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif mb-6">What People Say</h2>
        <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light">
          We’re grateful for the kind words from our community.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {REVIEWS.map((review) => (
          <div 
            key={review.id} 
            className="p-8 bg-stone-50 rounded-lg border border-stone-100 hover:border-stone-300 transition-all group"
          >
            <div className="mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-stone-300 text-xs">★</span>
              ))}
            </div>
            <p className="text-stone-600 mb-6 italic leading-relaxed font-light group-hover:text-stone-900 transition-colors">
              "{review.text}"
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-sm tracking-wide">{review.author}</p>
              <p className="text-xs text-stone-400 mt-1 uppercase tracking-widest">{review.source}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
