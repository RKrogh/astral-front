import NasaCircle from '@/components/NasaCircle';
import InteractiveNasaCircle from '@/components/InteractiveNasaCircle';
import MissionComputerMenu from '@/components/MissionComputerMenu';

export default function ExamplesPage() {
  // Example data for the interactive component
  const weatherData = [
    {
      sol: 3039,
      high: -4,
      low: -98,
      mission: 'MSL'
    },
    {
      sol: 3040,
      high: -2,
      low: -95,
      mission: 'MSL'
    },
    {
      sol: 3041,
      high: -6,
      low: -102,
      mission: 'MSL'
    }
  ];

  // Example data for the images component
  const imageData = [
    {
      id: 1,
      description: 'Mars surface captured by Perseverance rover (2022)'
    },
    {
      id: 2,
      description: 'Martian sunset captured by Curiosity rover'
    },
    {
      id: 3,
      description: 'Close-up of Martian rocks with visible sedimentary layers'
    }
  ];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>NASA Circle Component Examples</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
        {/* Basic NasaCircle Example */}
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Basic NasaCircle</h2>
          <NasaCircle 
            title="STATIC DATA" 
            color="#4a8baa" 
            backgroundColor="rgba(26, 42, 53, 0.7)"
          >
            <div style={{ textAlign: 'center' }}>
              <p>This is a static NasaCircle component with no interactivity.</p>
              <p style={{ marginTop: '1rem' }}>It's perfect for displaying fixed content.</p>
            </div>
          </NasaCircle>
        </div>
        
        {/* Interactive NasaCircle Example - Weather */}
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Interactive Weather Data</h2>
          <InteractiveNasaCircle 
            title="WEATHER DATA" 
            color="#4a8baa" 
            backgroundColor="rgba(26, 42, 53, 0.7)"
            data={weatherData}
            renderItem={(item) => (
              <>
                <h3 style={{ color: '#4a8baa', marginBottom: '1rem', textShadow: '0 0 8px rgba(74, 139, 170, 0.5)' }}>TODAY'S WEATHER (°F)</h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', width: '100%' }}>
                  <div>
                    <div style={{ fontSize: '2.25rem', fontWeight: 700, textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>{item.high}°</div>
                    <div style={{ color: '#a0a0a0' }}>high</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.25rem', fontWeight: 700, textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>{item.low}°</div>
                    <div style={{ color: '#a0a0a0' }}>low</div>
                  </div>
                </div>
                
                <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#a0a0a0' }}>Sol {item.sol} - {item.mission}</div>
              </>
            )}
          />
        </div>
        
        {/* Interactive NasaCircle Example - Images */}
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Interactive Images</h2>
          <InteractiveNasaCircle 
            title="MARS IMAGES" 
            color="#c75b5b" 
            backgroundColor="rgba(42, 21, 21, 0.7)"
            data={imageData}
            renderItem={(item) => (
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
                  <p style={{ fontSize: '0.875rem', textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }}>
                    Image {item.id}: {item.description}
                  </p>
                </div>
              </div>
            )}
          />
        </div>
        
        {/* NasaCircle with Custom Controls */}
        <div>
          <h2 style={{ marginBottom: '1rem' }}>NasaCircle with Controls</h2>
          <NasaCircle 
            title="CUSTOM CONTROLS" 
            color="#d9a45b" 
            backgroundColor="rgba(42, 30, 21, 0.7)"
            showControls={true}
            onPrevious={() => alert('Previous clicked')}
            onNext={() => alert('Next clicked')}
          >
            <div style={{ textAlign: 'center' }}>
              <p>This NasaCircle has custom controls enabled.</p>
              <p style={{ marginTop: '1rem' }}>Click the arrows below to trigger the alerts.</p>
            </div>
          </NasaCircle>
        </div>

        {/* Sci-Fi Mission Computer Menu */}
        <div>
          <h2 style={{ marginBottom: '1rem' }}>Sci-Fi Circular Menu</h2>
          <MissionComputerMenu />
        </div>
      </div>
    </main>
  );
} 