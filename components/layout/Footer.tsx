
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E2723] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold tracking-tighter text-white">AL-GHIZA</span>
              <div className="w-1 h-8 bg-[#D4AF37]"></div>
            </div>
            <p className="text-gray-300 leading-relaxed font-light">
              Premium Halal nutrition inspired by tradition and the Sunnah. We bring you the finest Talbina and healthy meals crafted for modern wellness.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#order-form" className="hover:text-white transition-colors">Place Order</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Information</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nutritional Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Halal Certification</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#D4AF37]">Newsletter</h4>
            <p className="text-gray-300 mb-4 font-light">Join our list for healthy lifestyle tips and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-[#D4AF37] text-white"
              />
              <button className="bg-[#D4AF37] text-white px-4 py-2 rounded-r-md hover:bg-[#B8962E] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} AL-GHIZA – Premium Food & Talbina. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-gray-500 italic">Designed with Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
