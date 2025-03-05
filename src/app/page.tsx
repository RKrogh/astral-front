'use client';

import Sidebar from '@/components/Sidebar';
import { useNavigation } from '@/hooks/useNavigation';
import PageContent from '@/components/PageContent';
import { NavigationProvider } from '@/hooks/NavigationContext';

export default function Home() {
  const { activeItem, handleItemClick, navItems, selectionCount } = useNavigation();

  return (
    <NavigationProvider activeItem={activeItem} selectionCount={selectionCount}>
      <main style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
        {/* Header/Navigation */}
        <header className="nasa-header" style={{ 
          padding: '0.5rem 1rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          width: '100%'
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '1rem' }}>
              {/* Inline SVG instead of external file */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 92" style={{ height: '3rem', width: '3rem' }}>
                <circle cx="50.049" cy="45" r="40.14" fill="#0b3d91"/>
                <path fill="#fff" d="M52.603 61.705c-15.75.256-30.64-12.377-30.89-28.136-.25-15.759 12.377-30.64 28.136-30.89 15.759-.25 30.64 12.377 30.89 28.136.25 15.759-12.377 30.64-28.136 30.89zm-1.149-57.063c-14.549.231-26.252 12.535-26.021 27.084.231 14.549 12.535 26.252 27.084 26.021 14.549-.231 26.252-12.535 26.021-27.084-.231-14.549-12.535-26.252-27.084-26.021z"/>
                <path fill="#fc3d21" d="M44.5 81.76c0 1.784-1.447 3.23-3.23 3.23-1.784 0-3.23-1.446-3.23-3.23 0-1.784 1.446-3.23 3.23-3.23 1.784 0 3.23 1.446 3.23 3.23z"/>
              </svg>
            </div>
            <div>
              <h1 style={{ fontSize: '0.875rem', fontWeight: 300, margin: 0 }}>NASA Science</h1>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.05em', margin: 0 }}>
                MARS <span style={{ fontSize: '1.125rem', fontWeight: 400 }}>EXPLORATION PROGRAM</span>
              </h2>
            </div>
          </div>
          
          <nav style={{ display: 'none' }}>
            <a href="#" style={{ marginLeft: '1.5rem' }}>The Red Planet</a>
            <a href="#" style={{ marginLeft: '1.5rem' }}>The Program</a>
            <a href="#" style={{ marginLeft: '1.5rem' }}>News & Events</a>
            <a href="#" style={{ marginLeft: '1.5rem' }}>Multimedia</a>
            <a href="#" style={{ marginLeft: '1.5rem' }}>Missions</a>
            <a href="#" style={{ marginLeft: '1.5rem' }}>More</a>
          </nav>
        </header>

        {/* Mars Background Image */}
        <div style={{
          position: 'fixed',
          top: '50%',
          right: '-20%',
          width: '60%',
          height: '60%',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'50\' fill=\'%23c75b5b\'/%3E%3C/svg%3E")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15,
          zIndex: 0,
          filter: 'blur(5px)',
          transform: 'translateY(-50%)',
          animation: 'float 20s ease-in-out infinite'
        }}></div>

        {/* Main Content */}
        <div style={{ 
          width: '95%', 
          maxWidth: '1800px', 
          margin: '0 auto', 
          padding: '2rem 0', 
          position: 'relative', 
          zIndex: 1 
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 300, 
            margin: '0 0 2rem 1rem',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.5)'
          }}>The Red Planet</h1>
          
          <div className="content-grid">
            {/* Left Navigation */}
            <Sidebar 
              items={navItems}
              activeItem={activeItem} 
              onItemClick={handleItemClick} 
            />
            
            {/* Main Content Area - Now using PageContent component */}
            <PageContent activeItem={activeItem} />
          </div>
        </div>
      </main>
    </NavigationProvider>
  );
}
