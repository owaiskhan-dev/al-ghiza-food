
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none";
  
  const variants = {
    primary: "bg-[#4A5D23] text-white hover:bg-[#3A491B] shadow-lg",
    secondary: "bg-[#F5F5DC] text-[#3E2723] hover:bg-[#EBEBC8]",
    outline: "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white",
    gold: "bg-[#D4AF37] text-white hover:bg-[#B8962E] shadow-xl"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
