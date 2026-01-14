
import React from 'react';
import { BRAND } from '../constants';

const Visit: React.FC = () => {
  return (
    <section id="visit" className="py-24 md:py-32 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Find Your Way to Us</h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            We are tucked away on Watergate Street, just a short walk from The Cross and the Eastgate Clock.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-lg shadow-sm border border-stone-200 h-fit">
            <h3 className="text-xl font-serif mb-6">Our Location</h3>
            <p className="text-stone-600 mb-8 font-light">
              {BRAND.address}<br />
              Chester City Centre<br />
              <span className="text-stone-400 italic text-sm">(Located inside the church)</span>
            </p>
            
            <h3 className="text-xl font-serif mb-6">Contact</h3>
            <p className="text-stone-600 mb-8 font-light">
              Phone: {BRAND.phone}
            </p>

            <h3 className="text-xl font-serif mb-6">Accessibility</h3>
            <p className="text-stone-600 font-light text-sm leading-relaxed">
              We aim to be welcoming to all. Please speak to our staff if you have specific accessibility needs; we have ground-floor entry and spacious seating.
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-sm border border-stone-200">
            <h3 className="text-xl font-serif mb-6">Opening Times</h3>
            <div className="space-y-4">
              {BRAND.openingHours.map((item) => (
                <div key={item.day} className="flex justify-between items-center text-sm">
                  <span className={`font-medium ${item.hours === 'Closed' ? 'text-stone-400' : 'text-stone-700'}`}>
                    {item.day}
                  </span>
                  <span className={`${item.hours === 'Closed' ? 'text-stone-400' : 'text-stone-600'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-stone-100 italic text-stone-400 text-sm">
              * Times may vary on Bank Holidays
            </div>
          </div>

          <div className="lg:col-span-1 h-[400px] lg:h-auto rounded-lg overflow-hidden shadow-sm border border-stone-200">
            {/* Google Maps Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2391.226305615732!2d-2.894356484168018!3d53.19016149234858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ad048740526e7%3A0xe4a15555e7f0932d!2sWatergate%20St%2C%20Chester%20CH1%202LA!5e0!3m2!1sen!2suk!4v1715694820301!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Café at the Cross Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
