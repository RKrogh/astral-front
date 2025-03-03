'use client';

import React, { ReactNode, useMemo, useState } from 'react';
import { useNavigationContext } from '@/hooks/NavigationContext';

interface NasaCircleProps {
  title: string;
  color: string;
  backgroundColor: string;
  children: ReactNode;
  onPrevious?: () => void;
  onNext?: () => void;
  showControls?: boolean;
  expandable?: boolean;
}

const NasaCircle: React.FC<NasaCircleProps> = ({
  title,
  color,
  backgroundColor,
  children,
  onPrevious,
  onNext,
  showControls = false,
  expandable = true,
}) => {
  const { isChanging } = useNavigationContext();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (!expandable) return;
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  // Generate random distortion values when navigation changes
  const distortionEffects = useMemo(() => {
    if (!isChanging) return null;
    
    // Random values for distortion - more intense but still readable
    const blurAmount = Math.random() * 10 + 2; // 2-12px blur
    const skewX = (Math.random() - 0.5) * 12; // -6 to 6 degrees
    const skewY = (Math.random() - 0.5) * 12; // -6 to 6 degrees
    const scale = 0.96 + Math.random() * 0.08; // 0.96-1.04 scale
    const translateX = (Math.random() - 0.5) * 10; // -5px to 5px
    const translateY = (Math.random() - 0.5) * 10; // -5px to 5px
    
    // Define yellow tint color for all effects
    const yellowTint = 'rgba(146, 141, 134, 0.93)';
    const yellowTintTransparent = 'rgba(146, 140, 135, 0.68)';
    const modifiedBackground = `linear-gradient(${yellowTint}, ${yellowTint}), ${backgroundColor}`;
    
    return {
      filter: `blur(${blurAmount}px) hue-rotate(${Math.random() * 25}deg) sepia(0.3)`,
      transform: `skew(${skewX}deg, ${skewY}deg) scale(${scale}) translate(${translateX}px, ${translateY}px)`,
      backgroundColor: modifiedBackground,
      borderColor: isChanging ? yellowTint : color,
      '--yellow-tint': yellowTint,
      '--yellow-tint-transparent': yellowTintTransparent
    };
  }, [isChanging, backgroundColor, color]);

  return (
    <div style={{ position: 'relative' }}>
      <div 
        onClick={handleClick}
        style={{ 
          cursor: expandable ? 'pointer' : 'default',
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
          transform: isExpanded ? 'scale(0)' : 'scale(1)',
          opacity: isExpanded ? 0 : 1,
          position: 'relative',
          zIndex: isExpanded ? 0 : 1,
          pointerEvents: isExpanded ? 'none' : 'auto',
        }}
      >
        <div 
          className={`nasa-circle ${isChanging ? 'distorting' : ''} ${expandable ? 'expandable-nasa-circle' : ''}`}
          style={{ 
            borderColor: color, 
            backgroundColor,
            ...(distortionEffects || {})
          }}
        >
          <div 
            className="nasa-circle-title" 
            style={{ 
              color: isChanging ? 'var(--yellow-tint)' : color,
              transition: 'color 0.25s ease-out'
            }}
          >
            {title}
          </div>
          
          <div className={isChanging ? 'content-yellowing' : ''}>
            {children}
          </div>
          
          {showControls && (
            <div className="nasa-circle-controls">
              <button 
                style={{ color: isChanging ? 'var(--yellow-tint)' : color }} 
                onClick={(e) => { e.stopPropagation(); onPrevious?.(); }}
                disabled={!onPrevious}
              >
                ◀
              </button>
              <button 
                style={{ color: isChanging ? 'var(--yellow-tint)' : color }} 
                onClick={(e) => { e.stopPropagation(); onNext?.(); }}
                disabled={!onNext}
              >
                ▶
              </button>
            </div>
          )}
        </div>
      </div>

      {expandable && isExpanded && (
        <>
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(5px)',
              zIndex: 998,
              cursor: 'pointer',
            }}
            onClick={handleClick}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              maxWidth: '1000px',
              height: '80vh',
              backgroundColor,
              border: `4px solid ${color}`,
              borderRadius: '1rem',
              padding: '2rem',
              zIndex: 999,
              boxShadow: `0 0 30px ${color}`,
              animation: 'expandFromCenter 0.3s ease-out',
              overflow: 'auto',
            }}
            onClick={handleModalClick}
          >
            <div 
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                cursor: 'pointer',
                fontSize: '1.5rem',
                color: color,
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: `2px solid ${color}`,
                transition: 'all 0.2s ease-out',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(2px)',
              }}
              onClick={handleClick}
            >
              ×
            </div>
            <h2 
              style={{ 
                color, 
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textShadow: `0 0 10px ${color}`,
              }}
            >
              {title}
            </h2>
            <div style={{ height: 'calc(100% - 4rem)', overflow: 'auto' }}>
              {children}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NasaCircle; 