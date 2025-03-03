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
  const [selectionCount, setSelectionCount] = useState(0);

  const handleItemClick = (item: NavigationItem) => {
    setSelectionCount(prev => prev + 1);
    setActiveItem(item);
  };

  return {
    activeItem,
    handleItemClick,
    navItems: DEFAULT_NAV_ITEMS,
    selectionCount
  };
}; 