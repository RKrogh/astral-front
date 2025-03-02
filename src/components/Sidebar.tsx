'use client';

import React, { useState } from 'react';

interface SidebarProps {
  items?: string[];
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  items = ['DASHBOARD', 'SCIENCE GOALS', 'THE PLANET', 'ATMOSPHERE', 'ASTROBIOLOGY', 'PAST, PRESENT, FUTURE, TIMELINE'],
  activeItem = 'DASHBOARD',
  onItemClick
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <div className="sidebar">
      <nav style={{ 
        display: 'flex', 
        flexDirection: 'column',
        width: '100%'
      }}>
        {items.map((item) => (
          <a 
            key={item} 
            href="#" 
            className="nasa-nav-item"
            style={{ 
              borderLeftColor: item === activeItem ? '#ff6b6b' : hoveredItem === item ? 'rgba(255, 107, 107, 0.5)' : 'transparent',
              backgroundColor: item === activeItem ? 'rgba(139, 62, 62, 0.7)' : hoveredItem === item ? 'rgba(92, 28, 28, 0.5)' : 'rgba(0, 0, 0, 0.2)',
              boxShadow: item === activeItem || hoveredItem === item ? '0 0 10px rgba(255, 107, 107, 0.5)' : 'none'
            }}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick(item);
            }}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 