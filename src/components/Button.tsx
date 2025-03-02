import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary' 
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md font-medium focus:outline-none";
  const variantStyles = variant === 'primary' 
    ? "bg-blue-500 text-white hover:bg-blue-600" 
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button 
      className={`${baseStyles} ${variantStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
} 