'use client';

import React, { useState, ReactNode } from 'react';
import NasaCircle from './NasaCircle';

interface CircularMenuItem {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

interface InteractiveNasaCircleProps {
  title: string;
  color: string;
  backgroundColor: string;
  children?: React.ReactNode;
  data?: any[];
  renderItem?: (item: any) => React.ReactNode;
  // Circular menu props
  enableCircularMenu?: boolean;
  circularMenuItems?: CircularMenuItem[];
  // Metro-line connection props
  showTopConnector?: boolean;
  showBottomConnector?: boolean;
  connectorOffset?: number;
  parentColor?: string;
}

const InteractiveNasaCircle: React.FC<InteractiveNasaCircleProps> = ({
  title,
  color,
  backgroundColor,
  children,
  data = [],
  renderItem,
  enableCircularMenu = false,
  circularMenuItems = [],
  showTopConnector = false,
  showBottomConnector = false,
  connectorOffset = 0,
  parentColor,
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
      showTopConnector={showTopConnector}
      showBottomConnector={showBottomConnector}
      connectorOffset={connectorOffset}
      parentColor={parentColor}
      enableCircularMenu={enableCircularMenu}
      circularMenuItems={circularMenuItems}
    >
      {content}
    </NasaCircle>
  );
};

export default InteractiveNasaCircle; 