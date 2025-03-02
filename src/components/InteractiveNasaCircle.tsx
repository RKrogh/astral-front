'use client';

import React, { useState } from 'react';
import NasaCircle from './NasaCircle';

interface InteractiveNasaCircleProps {
  title: string;
  color: string;
  backgroundColor: string;
  children?: React.ReactNode;
  data?: any[];
  renderItem?: (item: any) => React.ReactNode;
}

const InteractiveNasaCircle: React.FC<InteractiveNasaCircleProps> = ({
  title,
  color,
  backgroundColor,
  children,
  data = [],
  renderItem,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (data.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }
  };

  const handleNext = () => {
    if (data.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  };

  // If we have data and a renderItem function, render the current item
  // Otherwise, render the children
  const content = data.length > 0 && renderItem 
    ? renderItem(data[currentIndex])
    : children;

  return (
    <NasaCircle
      title={title}
      color={color}
      backgroundColor={backgroundColor}
      onPrevious={data.length > 1 ? handlePrevious : undefined}
      onNext={data.length > 1 ? handleNext : undefined}
      showControls={data.length > 1}
    >
      {content}
    </NasaCircle>
  );
};

export default InteractiveNasaCircle; 