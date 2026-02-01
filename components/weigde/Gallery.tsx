
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { 
      url: "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&q=80&w=800", 
      title: "Talbina Perfection",
      size: "col-span-1 row-span-2"
    },
    { 
      url: "https://plus.unsplash.com/premium_photo-1705516187293-3e8bb72f399b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZXklMjBncmFpbiUyMGRpc2h8ZW58MHx8MHx8fDA%3D", 
      title: "Honey & Grains",
      size: "col-span-1 row-span-1"
    },
    { 
      url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800", 
      title: "Traditional Spices",
      size: "col-span-1 row-span-1"
    },
    { 
      url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800", 
      title: "Healthy Platters",
      size: "col-span-2 row-span-1"
    },
    { 
      url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800", 
      title: "Fresh Ingredients",
      size: "col-span-1 row-span-1"
    },
    { 
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800", 
      title: "Artisan Desserts",
      size: "col-span-1 row-span-1"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">Visual Feast</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#3E2723]">Our Culinary Art</h3>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`${img.size} relative group overflow-hidden rounded-3xl shadow-lg cursor-pointer transition-all duration-500`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h4 className="text-white text-xl font-bold tracking-tight">{img.title}</h4>
                  <div className="w-8 h-0.5 bg-[#D4AF37] mt-2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
