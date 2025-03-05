import React from 'react';
import NasaCircle from '@/components/NasaCircle';

const Atmosphere: React.FC = () => {
  return (
    <div className="main-content">
      <NasaCircle 
        title="ATMOSPHERE" 
        color="#4a8baa" 
        backgroundColor="rgba(26, 42, 53, 0.7)"
      >
        <h3 style={{ color: '#4a8baa', marginBottom: '1rem', textShadow: '0 0 8px rgba(74, 139, 170, 0.5)' }}>MARTIAN ATMOSPHERE</h3>
        
        <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
          <p>The atmosphere of Mars is much thinner than Earth's. The surface pressure is only about 0.6% of Earth's mean sea level pressure. It consists of 95% carbon dioxide, 2.7% nitrogen, 1.6% argon, and traces of oxygen, water vapor, and other gases.</p>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="COMPOSITION" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '1rem', width: '100%', fontSize: '0.95rem' }}>
            <div>
              <div style={{ fontWeight: 'bold', color: '#c75b5b' }}>Carbon Dioxide (CO₂)</div>
            </div>
            <div>95.32%</div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#c75b5b' }}>Nitrogen (N₂)</div>
            </div>
            <div>2.7%</div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#c75b5b' }}>Argon (Ar)</div>
            </div>
            <div>1.6%</div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#c75b5b' }}>Oxygen (O₂)</div>
            </div>
            <div>0.13%</div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#c75b5b' }}>Carbon Monoxide (CO)</div>
            </div>
            <div>0.08%</div>
          </div>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="WEATHER PATTERNS" 
        color="#d9a45b" 
        backgroundColor="rgba(42, 30, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>Dust storms that can cover the entire planet</li>
            <li style={{ marginBottom: '0.75rem' }}>Temperature variations from -125°C at the poles to 20°C at the equator</li>
            <li style={{ marginBottom: '0.75rem' }}>Seasonal changes as Mars tilts on its axis</li>
            <li>Thin clouds of water ice and carbon dioxide ice</li>
          </ul>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="ATMOSPHERIC LOSS" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            Mars once had a much thicker atmosphere that supported flowing water on its surface. Over billions of years, Mars lost most of its atmosphere to space. This was primarily due to the planet's low gravity and lack of a global magnetic field, which allowed the solar wind to gradually strip away the atmosphere.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginTop: '1rem' }}>
            NASA's MAVEN mission has been studying this atmospheric loss process since 2014, helping scientists understand how Mars transformed from a warm, wet world to the cold, dry planet we see today.
          </p>
        </div>
      </NasaCircle>
    </div>
  );
};

export default Atmosphere; 