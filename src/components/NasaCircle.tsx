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
  // Metro-line connection props
  showTopConnector?: boolean;
  showBottomConnector?: boolean;
  connectorOffset?: number; // Allows for branching connections
  // Color inheritance props
  parentColor?: string; // Color to inherit/transition from
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
  showTopConnector = false,
  showBottomConnector = false,
  connectorOffset = 0,
  parentColor,
}) => {
  const { isChanging } = useNavigationContext();
  const [isExpanded, setIsExpanded] = useState(false);

  // Use inherited color if no specific color is provided
  const effectiveColor = color || parentColor;

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
      borderColor: isChanging ? yellowTint : effectiveColor,
      '--yellow-tint': yellowTint,
      '--yellow-tint-transparent': yellowTintTransparent
    };
  }, [isChanging, backgroundColor, effectiveColor]);

  // Create gradient for connector if colors are different
  const getConnectorBackground = (isTop: boolean) => {
    if (isChanging) return 'var(--yellow-tint)';
    
    if (isTop && parentColor && parentColor !== color) {
      return `linear-gradient(to bottom, ${parentColor}, ${color})`;
    }
    if (!isTop && showBottomConnector) {
      return color; // Use current color for bottom connector
    }
    return color;
  };

  return (
    <div style={{ 
      position: 'relative',
      paddingTop: showTopConnector ? '40px' : '0',
      paddingBottom: showBottomConnector ? '40px' : '0',
      marginLeft: connectorOffset,
      width: '300px', // Fixed width for consistency
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Top connector line */}
      {showTopConnector && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '4px',
            height: '40px',
            background: getConnectorBackground(true),
            transition: 'background-color 0.25s ease-out',
            transform: 'translateX(-50%)', // Center the connector
            ...(distortionEffects && {
              filter: distortionEffects.filter,
            })
          }}
        />
      )}

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
          width: '100%'
        }}
      >
        <div 
          className={`nasa-circle ${isChanging ? 'distorting' : ''} ${expandable ? 'expandable-nasa-circle' : ''}`}
          style={{ 
            borderColor: effectiveColor, 
            backgroundColor,
            minHeight: '200px', // Fixed minimum height for consistency
            width: '100%',
            ...(distortionEffects ? {
              filter: distortionEffects.filter,
              backgroundColor: distortionEffects.backgroundColor,
              borderColor: distortionEffects.borderColor,
              '--yellow-tint': distortionEffects['--yellow-tint'],
              '--yellow-tint-transparent': distortionEffects['--yellow-tint-transparent']
            } : {})
          }}
        >
          <div 
            className="nasa-circle-title" 
            style={{ 
              color: isChanging ? 'var(--yellow-tint)' : effectiveColor,
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
                style={{ color: isChanging ? 'var(--yellow-tint)' : effectiveColor }} 
                onClick={(e) => { e.stopPropagation(); onPrevious?.(); }}
                disabled={!onPrevious}
              >
                ◀
              </button>
              <button 
                style={{ color: isChanging ? 'var(--yellow-tint)' : effectiveColor }} 
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
              border: `4px solid ${effectiveColor}`,
              borderRadius: '1rem',
              padding: '2rem',
              zIndex: 999,
              boxShadow: `0 0 30px ${effectiveColor}`,
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
                color: effectiveColor,
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                border: `2px solid ${effectiveColor}`,
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
                color: effectiveColor, 
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textShadow: `0 0 10px ${effectiveColor}`,
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

      {/* Bottom connector line */}
      {showBottomConnector && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: '4px',
            height: '40px',
            background: getConnectorBackground(false),
            transition: 'background-color 0.25s ease-out',
            transform: 'translateX(-50%)', // Center the connector
            ...(distortionEffects && {
              filter: distortionEffects.filter,
            })
          }}
        />
      )}
    </div>
  );
};

export default NasaCircle; 