'use client';

import React, { ReactNode } from 'react';

interface NasaCircleProps {
  title: string;
  color: string;
  backgroundColor: string;
  children: ReactNode;
  onPrevious?: () => void;
  onNext?: () => void;
  showControls?: boolean;
}

const NasaCircle: React.FC<NasaCircleProps> = ({
  title,
  color,
  backgroundColor,
  children,
  onPrevious,
  onNext,
  showControls = false,
}) => {
  return (
    <div className="nasa-circle" style={{ borderColor: color, backgroundColor }}>
      <div className="nasa-circle-title" style={{ color }}>{title}</div>
      
      {children}
      
      {showControls && (
        <div className="nasa-circle-controls">
          <button 
            style={{ color }} 
            onClick={onPrevious}
            disabled={!onPrevious}
          >
            ◀
          </button>
          <button 
            style={{ color }} 
            onClick={onNext}
            disabled={!onNext}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default NasaCircle; 