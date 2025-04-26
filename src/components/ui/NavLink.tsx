import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="text-white hover:text-yellow-400 font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
}