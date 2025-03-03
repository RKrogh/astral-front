import { useState, useEffect } from 'react';
import { NavigationItem } from './useNavigation';

export const useNavigationEffect = (activeItem: NavigationItem, selectionCount: number = 0) => {
  // Track when the navigation changes
  const [isChanging, setIsChanging] = useState(false);
  const [prevItem, setPrevItem] = useState<NavigationItem | null>(null);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    // Trigger the effect when either the active item changes or the selection count changes
    // This ensures the effect runs even when selecting the same item (like Dashboard) again
    if ((prevItem !== null && prevItem !== activeItem) || (selectionCount > 0 && prevCount !== selectionCount)) {
      // Set the changing flag to true
      setIsChanging(true);
      
      // Set a timeout to reset the flag after the animation completes
      const timer = setTimeout(() => {
        setIsChanging(false);
      }, 500); // Faster animation duration
      
      // Clean up the timeout
      return () => clearTimeout(timer);
    }
    
    // Always update the previous item and count
    setPrevItem(activeItem);
    setPrevCount(selectionCount);
  }, [activeItem, prevItem, selectionCount, prevCount]);

  return {
    isChanging,
    prevItem,
    activeItem
  };
}; 