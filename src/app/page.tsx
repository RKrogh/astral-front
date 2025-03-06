'use client';

import Sidebar from '@/components/Sidebar';
import { useNavigation } from '@/hooks/useNavigation';
import PageContent from '@/components/PageContent';
import { NavigationProvider } from '@/hooks/NavigationContext';
import ThemeToggle from '@/components/ThemeToggle';

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h1 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}>THE RED PLANET</h1>
          </div>
          <ThemeToggle />
        </header>

        {/* Background Elements */}
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
