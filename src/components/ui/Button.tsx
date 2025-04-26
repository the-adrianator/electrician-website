import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'emergency';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200";
  
  const variants = {
    primary: "bg-navy-900 hover:bg-navy-800 text-white",
    secondary: "bg-yellow-400 hover:bg-yellow-500 text-navy-900",
    outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
    emergency: "bg-red-600 hover:bg-red-700 text-white animate-pulse",
  };
  
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };
  
  const sizeClasses = sizes[size];
  const variantClasses = variants[variant];
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}