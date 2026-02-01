
import React, { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Talbina', 'Traditional Food', 'Healthy Meals', 'Desserts'];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Classic Honey Talbina",
      category: "Talbina",
      price: "$12.00",
      description: "Sunnah-inspired barley porridge with pure organic honey and creamy milk.",
      image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Date & Nut Infusion",
      category: "Talbina",
      price: "$14.50",
      description: "Premium Talbina topped with Medjool dates and crushed pistachios.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Saffron Spiced Mandi",
      category: "Traditional Food",
      price: "$24.99",
      description: "Tender lamb served over aromatic long-grain rice with traditional spices.",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      name: "Herb Grilled Chicken",
      category: "Healthy Meals",
      price: "$18.50",
      description: "Lean chicken breast marinated in Mediterranean herbs with roasted veggies.",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      name: "Rose Water Baklava",
      category: "Desserts",
      price: "$9.00",
      description: "Handcrafted filo pastry layers with nuts and a delicate floral syrup.",
      image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      name: "Quinoa Tabbouleh",
      category: "Healthy Meals",
      price: "$11.00",
      description: "A modern healthy twist on the classic parsley salad using organic quinoa.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#F5F5DC]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Selection</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#3E2723]">The Al-Ghiza Menu</h3>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat ? 'bg-[#4A5D23] text-white shadow-lg' : 'bg-white text-[#3E2723] hover:bg-[#F5F5DC]'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[#4A5D23] font-bold shadow-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest mb-2">{item.category}</div>
                <h4 className="text-2xl font-bold text-[#3E2723] mb-3">{item.name}</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="mt-auto">
                   <button 
                    onClick={() => {
                      const el = document.getElementById('order-form');
                      el?.scrollIntoView({behavior: 'smooth'});
                    }}
                    className="text-[#4A5D23] font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all"
                   >
                     Order Now 
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
