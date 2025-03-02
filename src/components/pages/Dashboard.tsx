import React from 'react';
import NasaCircle from '@/components/NasaCircle';
import { useMarsData } from '@/hooks/useMarsData';

const Dashboard: React.FC = () => {
  const { weatherData, distanceData, newsItems } = useMarsData();

  return (
    <div className="main-content">
      {/* Weather Widget */}
      <NasaCircle 
        title="DATA" 
        color="#4a8baa" 
        backgroundColor="rgba(26, 42, 53, 0.7)"
      >
        <h3 style={{ color: '#4a8baa', marginBottom: '1rem', textShadow: '0 0 8px rgba(74, 139, 170, 0.5)' }}>TODAY'S WEATHER ({weatherData.unit})</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', width: '100%' }}>
          <div>
            <div style={{ fontSize: '2.25rem', fontWeight: 700, textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>{weatherData.highTemp}°</div>
            <div style={{ color: '#a0a0a0' }}>high</div>
          </div>
          <div>
            <div style={{ fontSize: '2.25rem', fontWeight: 700, textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>{weatherData.lowTemp}°</div>
            <div style={{ color: '#a0a0a0' }}>low</div>
          </div>
        </div>
        
        <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#a0a0a0' }}>Sol {weatherData.sol} - MSL</div>
      </NasaCircle>
      
      {/* Recent Images Widget */}
      <NasaCircle 
        title="RECENT IMAGES" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '75%', borderRadius: '0.5rem', overflow: 'hidden' }}>
          <div 
            style={{ 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'rgba(139, 62, 62, 0.5)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              textAlign: 'center', 
              padding: '1rem',
              backdropFilter: 'blur(3px)',
              boxShadow: 'inset 0 0 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p style={{ fontSize: '0.875rem', textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }}>Mars surface captured by Perseverance rover</p>
          </div>
        </div>
      </NasaCircle>
      
      {/* Distance Comparison Widget */}
      <NasaCircle 
        title="COMPARE" 
        color="#d9a45b" 
        backgroundColor="rgba(42, 30, 21, 0.7)"
      >
        <h3 style={{ color: '#d9a45b', marginBottom: '1rem', textShadow: '0 0 8px rgba(217, 164, 91, 0.5)' }}>DISTANCE FROM SUN</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', width: '100%' }}>
          <div>
            <div style={{ fontSize: '1.125rem', color: '#d9a45b' }}>MARS</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 700, textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>{distanceData.mars}</div>
          </div>
          <div>
            <div style={{ fontSize: '1.125rem', color: '#4a8baa' }}>EARTH</div>
            <div style={{ fontSize: '2.25rem', fontWeight: 700, color: '#4a8baa', textShadow: '0 0 10px rgba(74, 139, 170, 0.5)' }}>{distanceData.earth}</div>
          </div>
        </div>
        
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#a0a0a0' }}>{distanceData.unit}</div>
      </NasaCircle>
      
      {/* Latest Findings Widget */}
      <NasaCircle 
        title="LATEST FINDINGS" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '75%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#a0a0a0', marginBottom: '1rem' }}>{newsItems[0].date}</div>
          <h3 style={{ fontSize: '1.25rem', textAlign: 'center', padding: '0 1rem', textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}>
            {newsItems[0].title}
          </h3>
        </div>
      </NasaCircle>
    </div>
  );
};

export default Dashboard; 