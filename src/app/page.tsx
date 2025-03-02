import NasaCircle from '@/components/NasaCircle';

export default function Home() {
  return (
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
          <div className="sidebar">
            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {['DASHBOARD', 'SCIENCE GOALS', 'THE PLANET', 'ATMOSPHERE', 'ASTROBIOLOGY', 'PAST, PRESENT, FUTURE, TIMELINE'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="nasa-nav-item"
                  style={{ 
                    borderLeftColor: item === 'DASHBOARD' ? '#ff6b6b' : 'transparent',
                    backgroundColor: item === 'DASHBOARD' ? 'rgba(139, 62, 62, 0.7)' : 'rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Main Content Area */}
          <div className="main-content">
            {/* Weather Widget */}
            <NasaCircle 
              title="DATA" 
              color="#4a8baa" 
              backgroundColor="rgba(26, 42, 53, 0.7)"
            >
              <h3 style={{ color: '#4a8baa', marginBottom: '1rem', textShadow: '0 0 8px rgba(74, 139, 170, 0.5)' }}>TODAY'S WEATHER (°F)</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', width: '100%' }}>
                <div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 700, textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>-4°</div>
                  <div style={{ color: '#a0a0a0' }}>high</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 700, textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>-98°</div>
                  <div style={{ color: '#a0a0a0' }}>low</div>
                </div>
              </div>
              
              <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#a0a0a0' }}>Sol 3039 - MSL</div>
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
                  <div style={{ fontSize: '2.25rem', fontWeight: 700, textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>142</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.125rem', color: '#4a8baa' }}>EARTH</div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 700, color: '#4a8baa', textShadow: '0 0 10px rgba(74, 139, 170, 0.5)' }}>93</div>
                </div>
              </div>
              
              <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#a0a0a0' }}>millions of miles avg.</div>
            </NasaCircle>
            
            {/* Latest Findings Widget */}
            <NasaCircle 
              title="LATEST FINDINGS" 
              color="#c75b5b" 
              backgroundColor="rgba(42, 21, 21, 0.7)"
            >
              <div style={{ width: '100%', height: '75%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ color: '#a0a0a0', marginBottom: '1rem' }}>November 18, 2021</div>
                <h3 style={{ fontSize: '1.25rem', textAlign: 'center', padding: '0 1rem', textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}>
                  NASA's Perseverance Captures Challenging Flight by Mars Helicopter
                </h3>
              </div>
            </NasaCircle>
          </div>
        </div>
      </div>
    </main>
  );
}
