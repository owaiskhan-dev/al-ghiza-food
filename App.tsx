
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/weigde/Home';
import About from './components/weigde/About';
import Menu from './components/weigde/Menu';
import OrderForm from './components/weigde/OrderForm';
import Gallery from './components/weigde/Gallery';
import Contact from './components/weigde/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-gold selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <Menu />
        <OrderForm />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
