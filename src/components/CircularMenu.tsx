import React, { useEffect, useState } from 'react';

interface CircularMenuItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface CircularMenuProps {
  items: CircularMenuItem[];
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
}

const CircularMenu: React.FC<CircularMenuProps> = ({
  items,
  isOpen,
  onClose,
  position,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  if (!isOpen) return null;

  // Calculate positions for menu items in a circle
  const calculatePosition = (index: number, total: number, radius: number) => {
    // For even distribution around the circle
    const angle = (index / total) * 2 * Math.PI;
    
    // Calculate x and y coordinates
    const x = radius * Math.sin(angle);
    const y = -radius * Math.cos(angle); // Negative to start from the top
    
    return { x, y, angle };
  };

  // Handle click outside the menu
  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  // Prevent clicks on menu items from closing the menu
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Determine the radius based on the number of items
  const getRadius = () => {
    return 180; // Fixed radius for consistent sci-fi look
  };

  const radius = getRadius();
  const menuSize = radius * 2 + 100;

  return (
    <div
      className="circular-menu-backdrop"
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 900,
        backgroundColor: 'transparent', // No background fade
      }}
    >
      <div
        className="circular-menu-container"
        onClick={handleMenuClick}
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          zIndex: 901,
          transform: 'translate(-50%, -50%)', // Center the menu container
          width: menuSize,
          height: menuSize,
          pointerEvents: 'none', // Allow clicks to pass through to the NasaCircle
        }}
      >
        {/* Outer ring */}
        <div
          className="outer-ring"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: menuSize,
            height: menuSize,
            borderRadius: '50%',
            border: '2px solid rgba(64, 156, 255, 0.3)',
            boxShadow: '0 0 30px rgba(64, 156, 255, 0.2)',
            pointerEvents: 'none',
            animation: 'ringPulse 4s infinite ease-in-out',
          }}
        />

        {/* Menu items */}
        {items.map((item, index) => {
          const { x, y, angle } = calculatePosition(index, items.length, radius);
          const segmentAngle = (2 * Math.PI) / items.length;
          
          // Calculate arc path for the segment
          const startAngle = angle - segmentAngle / 2;
          const endAngle = angle + segmentAngle / 2;
          
          // Calculate points for the segment
          const innerRadius = radius - 30;
          const outerRadius = radius + 30;
          
          // Start and end points for inner and outer arcs
          const innerStartX = innerRadius * Math.sin(startAngle);
          const innerStartY = -innerRadius * Math.cos(startAngle);
          const innerEndX = innerRadius * Math.sin(endAngle);
          const innerEndY = -innerRadius * Math.cos(endAngle);
          
          const outerStartX = outerRadius * Math.sin(startAngle);
          const outerStartY = -outerRadius * Math.cos(startAngle);
          const outerEndX = outerRadius * Math.sin(endAngle);
          const outerEndY = -outerRadius * Math.cos(endAngle);
          
          // Flag for large arc (0 for arc < 180 degrees, 1 for arc >= 180 degrees)
          const largeArcFlag = segmentAngle > Math.PI ? 1 : 0;
          
          // SVG path for the segment
          const path = `
            M ${innerStartX} ${innerStartY}
            A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${innerEndX} ${innerEndY}
            L ${outerEndX} ${outerEndY}
            A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 0 ${outerStartX} ${outerStartY}
            Z
          `;
          
          // Calculate the center point of the segment for text positioning
          const segmentCenterAngle = (startAngle + endAngle) / 2;
          const segmentCenterRadius = (innerRadius + outerRadius) / 2;
          const segmentCenterX = segmentCenterRadius * Math.sin(segmentCenterAngle);
          const segmentCenterY = -segmentCenterRadius * Math.cos(segmentCenterAngle);
          
          const isHovered = hoveredIndex === index;
          
          return (
            <div
              key={index}
              className={`circular-menu-item circular-menu-item-${index}`}
              onClick={(e) => {
                e.stopPropagation();
                item.onClick();
                onClose();
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: menuSize,
                height: menuSize,
                pointerEvents: 'none', // Initially none, we'll enable it on the SVG
              }}
            >
              <svg
                width={menuSize}
                height={menuSize}
                viewBox={`-${menuSize/2} -${menuSize/2} ${menuSize} ${menuSize}`}
                style={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  pointerEvents: 'none',
                }}
              >
                <path
                  d={path}
                  fill={isHovered ? "rgba(40, 40, 40, 0.9)" : "rgba(30, 30, 30, 0.8)"}
                  stroke={isHovered ? "rgba(64, 156, 255, 1)" : "rgba(64, 156, 255, 0.8)"}
                  strokeWidth={isHovered ? "2" : "1"}
                  style={{
                    pointerEvents: 'auto', // Enable pointer events on the path
                    cursor: 'pointer',
                    animation: `fadeIn 0.3s ease-out forwards`,
                    animationDelay: `${index * 0.05}s`,
                    filter: isHovered ? 'drop-shadow(0 0 5px rgba(64, 156, 255, 0.7))' : 'none',
                    transition: 'all 0.2s ease-out',
                  }}
                  className={`menu-segment-${index}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                
                {/* Text and icon directly in SVG for better positioning */}
                <foreignObject
                  x={segmentCenterX - 40}
                  y={segmentCenterY - 20}
                  width="80"
                  height="40"
                  style={{
                    overflow: 'visible',
                    pointerEvents: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isHovered ? 'rgba(64, 156, 255, 1)' : 'rgba(64, 156, 255, 0.9)',
                      textAlign: 'center',
                      animation: `fadeIn 0.5s ease-out forwards`,
                      animationDelay: `${index * 0.05 + 0.1}s`,
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.2s ease-out',
                    }}
                  >
                    <div style={{ 
                      fontSize: '18px', 
                      marginBottom: '2px',
                      textShadow: isHovered ? '0 0 8px rgba(64, 156, 255, 0.9)' : 'none',
                    }}>
                      {item.icon}
                    </div>
                    <div 
                      style={{ 
                        fontSize: '10px', 
                        fontFamily: 'monospace',
                        letterSpacing: '1px',
                        textShadow: isHovered ? '0 0 8px rgba(64, 156, 255, 0.9)' : '0 0 5px rgba(64, 156, 255, 0.7)',
                        whiteSpace: 'nowrap',
                        fontWeight: isHovered ? 'bold' : 'normal',
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>
          );
        })}
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes ringPulse {
          0% { box-shadow: 0 0 15px rgba(64, 156, 255, 0.2); }
          50% { box-shadow: 0 0 30px rgba(64, 156, 255, 0.4); }
          100% { box-shadow: 0 0 15px rgba(64, 156, 255, 0.2); }
        }
        
        @keyframes lineGrow {
          from { stroke-dashoffset: 100; opacity: 0; }
          to { stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CircularMenu;