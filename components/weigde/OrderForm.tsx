
import React, { useState } from 'react';
import Button from '../shares/Button';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    category: 'Talbina',
    item: '',
    quantity: '1',
    instructions: '',
    deliveryDate: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="order-form" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5F5DC] rounded-full -mr-32 -mt-32 opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A5D23]/5 rounded-full -ml-48 -mb-48 opacity-40"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-4">Reservation</h2>
          <h3 className="text-4xl font-bold text-[#3E2723]">Place Your Premium Order</h3>
          <p className="mt-4 text-gray-500 font-light">Experience luxury dining from the comfort of your home.</p>
        </div>

        <div className="bg-[#FDFBF7] p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-[#3E2723] mb-2">Order Received!</h4>
              <p className="text-gray-600">Our concierge will contact you shortly to confirm your premium selection.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3E2723] ml-1">Full Name *</label>
                <input 
                  required
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A5D23] transition-all bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3E2723] ml-1">Phone Number *</label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (234) 567-890" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A5D23] transition-all bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3E2723] ml-1">Food Category *</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A5D23] transition-all bg-white appearance-none"
                >
                  <option>Talbina</option>
                  <option>Traditional Food</option>
                  <option>Healthy Meals</option>
                  <option>Desserts</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3E2723] ml-1">Item Selection *</label>
                <input 
                  required
                  type="text" 
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                  placeholder="e.g. Classic Honey Talbina" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A5D23] transition-all bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3E2723] ml-1">Quantity *</label>
                <input 
                  required
                  type="number" 
                  min="1"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A5D23] transition-all bg-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3E2723] ml-1">Delivery Date *</label>
                <input 
                  required
                  type="date" 
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A5D23] transition-all bg-white"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-[#3E2723] ml-1">Special Instructions</label>
                <textarea 
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about allergies or specific preferences..." 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4A5D23] transition-all bg-white resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <Button type="submit" variant="primary" className="w-full text-lg py-5 shadow-xl">
                  Confirm Premium Order
                </Button>
                <p className="text-center text-xs text-gray-400 mt-4 italic font-light">
                  By submitting, you agree to our terms of premium service.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
