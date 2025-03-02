'use client';

import React, { useState } from 'react';
import { DEFAULT_NAV_ITEMS, NavigationItem } from '@/hooks/useNavigation';

interface SidebarProps {
  items?: NavigationItem[];
  activeItem?: NavigationItem;
  onItemClick?: (item: NavigationItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  items = DEFAULT_NAV_ITEMS,
  activeItem = 'DASHBOARD',
  onItemClick
}) => {
  const [hoveredItem, setHoveredItem] = useState<NavigationItem | null>(null);

  const handleItemClick = (item: NavigationItem) => {
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