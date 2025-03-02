import React from 'react';
import NasaCircle from '@/components/NasaCircle';

const ThePlanet: React.FC = () => {
  return (
    <div className="main-content">
      <NasaCircle 
        title="MARS OVERVIEW" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <h3 style={{ color: '#c75b5b', marginBottom: '1rem', textShadow: '0 0 8px rgba(199, 91, 91, 0.5)' }}>THE RED PLANET</h3>
        
        <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
          <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In the English language, Mars is named for the Roman god of war.</p>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="PHYSICAL CHARACTERISTICS" 
        color="#4a8baa" 
        backgroundColor="rgba(26, 42, 53, 0.7)"
      >
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', fontSize: '0.95rem' }}>
            <div>
              <div style={{ fontWeight: 'bold', color: '#4a8baa' }}>Diameter</div>
              <div>6,779 km</div>
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#4a8baa' }}>Mass</div>
              <div>6.39 × 10^23 kg</div>
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#4a8baa' }}>Gravity</div>
              <div>3.721 m/s²</div>
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#4a8baa' }}>Day Length</div>
              <div>24h 37m</div>
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#4a8baa' }}>Year Length</div>
              <div>687 Earth days</div>
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#4a8baa' }}>Temperature</div>
              <div>-87°C to 20°C</div>
            </div>
          </div>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="SURFACE FEATURES" 
        color="#d9a45b" 
        backgroundColor="rgba(42, 30, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>Olympus Mons - largest volcano in the solar system</li>
            <li style={{ marginBottom: '0.75rem' }}>Valles Marineris - one of the largest canyons</li>
            <li style={{ marginBottom: '0.75rem' }}>Polar ice caps composed of water and carbon dioxide</li>
            <li>Ancient river valleys and lake beds</li>
          </ul>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="MOONS" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', width: '100%', fontSize: '0.95rem' }}>
            <div>
              <div style={{ fontWeight: 'bold', color: '#c75b5b', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phobos</div>
              <div style={{ marginBottom: '0.5rem' }}>Diameter: 22.2 km</div>
              <div>Orbits Mars every 7.7 hours</div>
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#c75b5b', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Deimos</div>
              <div style={{ marginBottom: '0.5rem' }}>Diameter: 12.6 km</div>
              <div>Orbits Mars every 30.4 hours</div>
            </div>
          </div>
        </div>
      </NasaCircle>
    </div>
  );
};

export default ThePlanet; 