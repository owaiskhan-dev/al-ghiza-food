
import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      title: "Our Location",
      detail: "123 Premium Gourmet St, Artisan District, DXB 99001",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Contact Us",
      detail: "+1 (555) 888-GHIZA\nconcierge@al-ghiza.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Business Hours",
      detail: "Mon - Sat: 9:00 AM - 10:00 PM\nSunday: 12:00 PM - 8:00 PM",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#F5F5DC]/20 border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4A5D23] text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3">
                {info.icon}
              </div>
              <h4 className="text-xl font-bold text-[#3E2723] mb-4">{info.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed whitespace-pre-line">
                {info.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px]">
          {/* Simple descriptive placeholder for map/location visual */}
          <div className="absolute inset-0 bg-[#3E2723]/5 flex items-center justify-center">
             <div className="text-center p-12 max-w-lg">
                <div className="text-[#D4AF37] mb-6">
                  <svg className="w-20 h-20 mx-auto opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h5 className="text-3xl font-bold text-[#3E2723] mb-4">Visit Our Boutique</h5>
                <p className="text-gray-600">Experience the essence of AL-GHIZA in person. Our premium outlet offers fresh tastings and exclusive consultation for your dietary needs.</p>
             </div>
          </div>
          {/* Static map overlay simulation */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
