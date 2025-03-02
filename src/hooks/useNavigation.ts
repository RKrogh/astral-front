import { useState } from 'react';

export type NavigationItem = 
  | 'DASHBOARD' 
  | 'SCIENCE GOALS' 
  | 'THE PLANET' 
  | 'ATMOSPHERE' 
  | 'ASTROBIOLOGY' 
  | 'PAST, PRESENT, FUTURE, TIMELINE';

export const DEFAULT_NAV_ITEMS: NavigationItem[] = [
  'DASHBOARD', 
  'SCIENCE GOALS', 
  'THE PLANET', 
  'ATMOSPHERE', 
  'ASTROBIOLOGY', 
  'PAST, PRESENT, FUTURE, TIMELINE'
];

export const useNavigation = (initialItem: NavigationItem = 'DASHBOARD') => {
  const [activeItem, setActiveItem] = useState<NavigationItem>(initialItem);

  const handleItemClick = (item: NavigationItem) => {
    setActiveItem(item);
  };

  return {
    activeItem,
    handleItemClick,
    navItems: DEFAULT_NAV_ITEMS
  };
}; 