
import React from 'react';
import Button from '../shares/Button';

const Home: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=2070" 
          alt="Premium Food Background" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3E2723]/90 via-[#3E2723]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-block px-4 py-1 mb-6 border border-[#D4AF37] rounded-full">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">The Art of Pure Nutrition</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Experience <span className="text-[#D4AF37]">Premium</span> Talbina & Halal Cuisine
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed font-light">
            Nourishing your soul and body with authentic flavors inspired by the Sunnah. AL-GHIZA brings premium quality health foods to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gold" onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})}>
              Explore Menu
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('order-form')?.scrollIntoView({behavior: 'smooth'})}>
              Order Now
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-white/20 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-[#D4AF37] mt-1 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
