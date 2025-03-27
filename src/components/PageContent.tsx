import React from 'react';
import { NavigationItem } from '@/hooks/useNavigation';
import Dashboard from './pages/Dashboard';
import ScienceGoals from './pages/ScienceGoals';
import ThePlanet from './pages/ThePlanet';
import Atmosphere from './pages/Atmosphere';
import Astrobiology from './pages/Astrobiology';
import Timeline from './pages/Timeline';
import Examples from './pages/Examples';

interface PageContentProps {
  activeItem: NavigationItem;
}

const PageContent: React.FC<PageContentProps> = ({ activeItem }) => {
  // Render the appropriate page based on the active navigation item
  switch (activeItem) {
    case 'DASHBOARD':
      return <Dashboard />;
    case 'SCIENCE GOALS':
      return <ScienceGoals />;
    case 'THE PLANET':
      return <ThePlanet />;
    case 'ATMOSPHERE':
      return <Atmosphere />;
    case 'ASTROBIOLOGY':
      return <Astrobiology />;
    case 'PAST, PRESENT, FUTURE, TIMELINE':
      return <Timeline />;
    case 'EXAMPLES':
      return <Examples />;
    default:
      return <Dashboard />;
  }
};

export default PageContent; 