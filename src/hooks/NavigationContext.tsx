import React, { createContext, useContext, ReactNode } from 'react';
import { NavigationItem } from './useNavigation';
import { useNavigationEffect } from './useNavigationEffect';

interface NavigationContextType {
  isChanging: boolean;
  prevItem: NavigationItem | null;
  activeItem: NavigationItem;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
  activeItem: NavigationItem;
  selectionCount?: number;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ 
  children, 
  activeItem,
  selectionCount = 0
}) => {
  const navigationEffect = useNavigationEffect(activeItem, selectionCount);

  return (
    <NavigationContext.Provider value={navigationEffect}>
      {children}
    </NavigationContext.Provider>
  );
}; 