import React from 'react';
import NasaCircle from '@/components/NasaCircle';

const Astrobiology: React.FC = () => {
  return (
    <div className="main-content">
      <NasaCircle 
        title="ASTROBIOLOGY" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <h3 style={{ color: '#c75b5b', marginBottom: '1rem', textShadow: '0 0 8px rgba(199, 91, 91, 0.5)' }}>SEARCH FOR LIFE</h3>
        
        <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
          <p>Astrobiology is the study of the origin, evolution, and distribution of life in the universe. Mars has been a primary focus for astrobiologists due to evidence that it once had conditions suitable for life as we know it.</p>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="HABITABILITY" 
        color="#4a8baa" 
        backgroundColor="rgba(26, 42, 53, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            Evidence suggests that early Mars had:
          </p>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>Liquid water on its surface</li>
            <li style={{ marginBottom: '0.75rem' }}>A thicker atmosphere</li>
            <li style={{ marginBottom: '0.75rem' }}>Warmer temperatures</li>
            <li>Protection from radiation (possible magnetic field)</li>
          </ul>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginTop: '1rem' }}>
            These conditions may have been suitable for microbial life to develop.
          </p>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="EVIDENCE SEARCH" 
        color="#d9a45b" 
        backgroundColor="rgba(42, 30, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem' }}>
            Current missions are searching for:
          </p>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>Organic compounds - the building blocks of life</li>
            <li style={{ marginBottom: '0.75rem' }}>Biosignatures - chemical or physical signs of past or present life</li>
            <li style={{ marginBottom: '0.75rem' }}>Habitable environments - places where life could have survived</li>
            <li>Subsurface water - potential current habitats for microbial life</li>
          </ul>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="PERSEVERANCE MISSION" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            The Perseverance rover, which landed in Jezero Crater in 2021, is specifically designed to search for signs of ancient microbial life. The crater was chosen because it appears to have once been a lake, with an ancient river delta flowing into it.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginTop: '1rem' }}>
            Perseverance is collecting samples that will eventually be returned to Earth by a future mission, allowing scientists to study them with more sophisticated laboratory equipment than can be sent to Mars.
          </p>
        </div>
      </NasaCircle>
    </div>
  );
};

export default Astrobiology; 