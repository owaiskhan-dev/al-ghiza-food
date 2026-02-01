
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F5F5DC] rounded-full z-0 opacity-50"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1974" 
                alt="Healthy Ingredients" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border-l-4 border-[#4A5D23]">
              <div className="text-3xl font-bold text-[#4A5D23]">100%</div>
              <div className="text-sm text-[#3E2723] font-medium uppercase tracking-wider">Natural & Halal</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Heritage</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#3E2723] leading-tight">
                Authenticity in Every <span className="text-[#4A5D23]">Grain</span>
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              AL-GHIZA was founded on the principle that premium nutrition should be both delicious and rooted in tradition. Specializing in Talbina — a prophetic healing food mentioned in the Sunnah — we've perfected the blend of barley, milk, and honey to provide a comforting, nutrient-dense experience.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 bg-[#F5F5DC] rounded-full flex items-center justify-center text-[#4A5D23]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>
                </div>
                <h4 className="font-bold text-[#3E2723]">Premium Quality</h4>
                <p className="text-sm text-gray-500">Only the finest organic ingredients sourced globally.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 bg-[#F5F5DC] rounded-full flex items-center justify-center text-[#4A5D23]">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <h4 className="font-bold text-[#3E2723]">Traditional Care</h4>
                <p className="text-sm text-gray-500">Prepared with slow-cooking methods to preserve nutrients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
