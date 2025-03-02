import React from 'react';
import NasaCircle from '@/components/NasaCircle';

const Timeline: React.FC = () => {
  return (
    <div className="main-content">
      <NasaCircle 
        title="TIMELINE" 
        color="#4a8baa" 
        backgroundColor="rgba(26, 42, 53, 0.7)"
      >
        <h3 style={{ color: '#4a8baa', marginBottom: '1rem', textShadow: '0 0 8px rgba(74, 139, 170, 0.5)' }}>MARS EXPLORATION HISTORY</h3>
        
        <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
          <p>Humanity's fascination with Mars has led to numerous missions to study the Red Planet, from early flybys to sophisticated rovers and future human exploration plans.</p>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="EARLY EXPLORATION" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>1965:</strong> Mariner 4 - First successful Mars flyby</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>1971:</strong> Mariner 9 - First spacecraft to orbit Mars</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>1976:</strong> Viking 1 & 2 - First successful Mars landers</li>
            <li><strong>1997:</strong> Mars Pathfinder - Delivered first rover (Sojourner)</li>
          </ul>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="MODERN MISSIONS" 
        color="#d9a45b" 
        backgroundColor="rgba(42, 30, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>2001:</strong> Mars Odyssey - Longest-serving spacecraft at Mars</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>2003:</strong> Spirit & Opportunity rovers</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>2005:</strong> Mars Reconnaissance Orbiter</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>2012:</strong> Curiosity rover</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>2014:</strong> MAVEN orbiter</li>
            <li><strong>2018:</strong> InSight lander</li>
          </ul>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="CURRENT MISSIONS" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>2021:</strong> Perseverance rover - Collecting samples for return to Earth</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>2021:</strong> Ingenuity helicopter - First powered flight on another planet</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>2022:</strong> ESA's ExoMars Trace Gas Orbiter</li>
            <li><strong>2022:</strong> UAE's Hope orbiter - Studying Mars' atmosphere</li>
          </ul>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="FUTURE PLANS" 
        color="#4a8baa" 
        backgroundColor="rgba(26, 42, 53, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>2028:</strong> Mars Sample Return mission - Bringing Perseverance samples to Earth</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>2030s:</strong> Potential human orbital mission</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>2040s:</strong> Possible human landing on Mars</li>
            <li><strong>Future:</strong> Long-term goals include establishing a sustainable human presence</li>
          </ul>
        </div>
      </NasaCircle>
    </div>
  );
};

export default Timeline; 