import React from 'react';
import NasaCircle from '@/components/NasaCircle';

const ScienceGoals: React.FC = () => {
  return (
    <div className="main-content">
      <NasaCircle 
        title="SCIENCE GOALS" 
        color="#4a8baa" 
        backgroundColor="rgba(26, 42, 53, 0.7)"
      >
        <h3 style={{ color: '#4a8baa', marginBottom: '1rem', textShadow: '0 0 8px rgba(74, 139, 170, 0.5)' }}>MARS EXPLORATION PROGRAM</h3>
        
        <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
          <p>The Mars Exploration Program studies Mars as a planetary system in order to understand the formation and early evolution of Mars as a planet, the history of geological processes that have shaped Mars through time, the potential for Mars to have hosted life, and the future exploration of Mars by humans.</p>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="KEY OBJECTIVES" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>Determine if life ever existed on Mars</li>
            <li style={{ marginBottom: '0.75rem' }}>Characterize the climate of Mars</li>
            <li style={{ marginBottom: '0.75rem' }}>Characterize the geology of Mars</li>
            <li>Prepare for human exploration</li>
          </ul>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="CURRENT MISSIONS" 
        color="#d9a45b" 
        backgroundColor="rgba(42, 30, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>Perseverance Rover (2020-present)</li>
            <li style={{ marginBottom: '0.75rem' }}>Ingenuity Helicopter (2020-present)</li>
            <li style={{ marginBottom: '0.75rem' }}>Curiosity Rover (2012-present)</li>
            <li>InSight Lander (2018-2022)</li>
          </ul>
        </div>
      </NasaCircle>
      
      <NasaCircle 
        title="FUTURE PLANS" 
        color="#c75b5b" 
        backgroundColor="rgba(42, 21, 21, 0.7)"
      >
        <div style={{ width: '100%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
            NASA and ESA are working together on a multi-mission campaign to return samples from Mars to Earth. The campaign begins with Perseverance collecting and caching samples, followed by a Sample Retrieval Lander and Earth Return Orbiter mission to bring the samples back to Earth for detailed analysis.
          </p>
        </div>
      </NasaCircle>
    </div>
  );
};

export default ScienceGoals; 