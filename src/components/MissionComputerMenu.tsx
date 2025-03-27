import React, { useState } from 'react';
import NasaCircle from './NasaCircle';

const MissionComputerMenu: React.FC = () => {
  // Sci-fi themed menu items with more appropriate icons
  const sciFiMenuItems = [
    {
      icon: '🔧',
      label: 'EQUIPMENT',
      onClick: () => alert('Equipment selected')
    },
    {
      icon: '👥',
      label: 'SQUAD',
      onClick: () => alert('Squad selected')
    },
    {
      icon: '🗺️',
      label: 'MAP',
      onClick: () => alert('Map selected')
    },
    {
      icon: '📓',
      label: 'JOURNAL',
      onClick: () => alert('Journal selected')
    },
    {
      icon: '📚',
      label: 'CODEX',
      onClick: () => alert('Codex selected')
    },
    {
      icon: '💾',
      label: 'SAVE',
      onClick: () => alert('Save selected')
    },
    {
      icon: '📂',
      label: 'LOAD',
      onClick: () => alert('Load selected')
    },
    {
      icon: '⚙️',
      label: 'SETTINGS',
      onClick: () => alert('Settings selected')
    },
    {
      icon: '🚪',
      label: 'EXIT',
      onClick: () => alert('Exit Game selected')
    }
  ];

  // Interactive menu items with different categories
  const interactiveMenuItems = [
    {
      icon: '🎮',
      label: 'GAME MODE',
      onClick: () => alert('Game Mode selected')
    },
    {
      icon: '🎯',
      label: 'MISSIONS',
      onClick: () => alert('Missions selected')
    },
    {
      icon: '🏆',
      label: 'ACHIEVEMENTS',
      onClick: () => alert('Achievements selected')
    },
    {
      icon: '🎨',
      label: 'CUSTOMIZATION',
      onClick: () => alert('Customization selected')
    },
    {
      icon: '🎵',
      label: 'SOUNDTRACK',
      onClick: () => alert('Soundtrack selected')
    },
    {
      icon: '📸',
      label: 'GALLERY',
      onClick: () => alert('Gallery selected')
    },
    {
      icon: '🎪',
      label: 'ARCADE',
      onClick: () => alert('Arcade selected')
    },
    {
      icon: '🎲',
      label: 'MINI-GAMES',
      onClick: () => alert('Mini-games selected')
    },
    {
      icon: '🎭',
      label: 'THEATER',
      onClick: () => alert('Theater selected')
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(interactiveMenuItems.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const currentItems = interactiveMenuItems.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div style={{ 
      display: 'flex', 
      gap: '2rem', 
      padding: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      {/* Original Sci-Fi Menu */}
      <NasaCircle 
        title="MISSION COMPUTER" 
        color="#409cff" 
        backgroundColor="rgba(10, 20, 40, 0.8)"
        enableCircularMenu={true}
        circularMenuItems={sciFiMenuItems}
      >
        <div style={{ 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(10, 20, 40, 0.5)',
            border: '2px solid rgba(64, 156, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '15px',
            boxShadow: '0 0 15px rgba(64, 156, 255, 0.5)',
          }}>
            <span style={{ 
              fontSize: '24px',
              color: '#409cff',
            }}>•</span>
          </div>
          
          <p style={{ 
            color: '#409cff', 
            fontFamily: 'monospace', 
            letterSpacing: '1px',
            fontSize: '16px',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(64, 156, 255, 0.7)',
            marginBottom: '10px',
          }}>
            SYSTEM READY
          </p>
          
          <div style={{ 
            padding: '0.5rem',
            border: '1px solid rgba(64, 156, 255, 0.3)',
            borderRadius: '4px',
            backgroundColor: 'rgba(64, 156, 255, 0.1)',
            width: '80%',
            maxWidth: '200px',
          }}>
            <p style={{ 
              color: '#409cff', 
              fontFamily: 'monospace', 
              opacity: 0.9,
              fontSize: '12px',
              margin: 0,
            }}>
              RIGHT-CLICK TO ACCESS
            </p>
          </div>
          
          <div style={{
            marginTop: '15px',
            width: '80%',
            maxWidth: '200px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'rgba(64, 156, 255, 0.8)',
              boxShadow: '0 0 5px rgba(64, 156, 255, 0.7)',
            }} />
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'rgba(64, 156, 255, 0.8)',
              boxShadow: '0 0 5px rgba(64, 156, 255, 0.7)',
            }} />
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'rgba(64, 156, 255, 0.8)',
              boxShadow: '0 0 5px rgba(64, 156, 255, 0.7)',
            }} />
          </div>
        </div>
      </NasaCircle>

      {/* Interactive Menu */}
      <NasaCircle 
        title="INTERACTIVE MENU" 
        color="#ff4081" 
        backgroundColor="rgba(40, 10, 20, 0.8)"
        enableCircularMenu={true}
        circularMenuItems={currentItems}
        showControls={true}
        onPrevious={handlePrevious}
        onNext={handleNext}
      >
        <div style={{ 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(40, 10, 20, 0.5)',
            border: '2px solid rgba(255, 64, 129, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '15px',
            boxShadow: '0 0 15px rgba(255, 64, 129, 0.5)',
          }}>
            <span style={{ 
              fontSize: '24px',
              color: '#ff4081',
            }}>•</span>
          </div>
          
          <p style={{ 
            color: '#ff4081', 
            fontFamily: 'monospace', 
            letterSpacing: '1px',
            fontSize: '16px',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(255, 64, 129, 0.7)',
            marginBottom: '10px',
          }}>
            PAGE {currentIndex + 1}/{totalPages}
          </p>
          
          <div style={{ 
            padding: '0.5rem',
            border: '1px solid rgba(255, 64, 129, 0.3)',
            borderRadius: '4px',
            backgroundColor: 'rgba(255, 64, 129, 0.1)',
            width: '80%',
            maxWidth: '200px',
          }}>
            <p style={{ 
              color: '#ff4081', 
              fontFamily: 'monospace', 
              opacity: 0.9,
              fontSize: '12px',
              margin: 0,
            }}>
              USE ARROWS TO NAVIGATE
            </p>
          </div>
          
          <div style={{
            marginTop: '15px',
            width: '80%',
            maxWidth: '200px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 64, 129, 0.8)',
              boxShadow: '0 0 5px rgba(255, 64, 129, 0.7)',
            }} />
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 64, 129, 0.8)',
              boxShadow: '0 0 5px rgba(255, 64, 129, 0.7)',
            }} />
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 64, 129, 0.8)',
              boxShadow: '0 0 5px rgba(255, 64, 129, 0.7)',
            }} />
          </div>
        </div>
      </NasaCircle>
    </div>
  );
};

export default MissionComputerMenu;