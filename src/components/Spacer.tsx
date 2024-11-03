import React from 'react';

interface SpacerProps {
  height?: string | number; // Optional height
  width?: string | number;  // Optional width
  background_color?: string;  // Optional background color
}

const Spacer: React.FC<SpacerProps> = ({ height = 0, width = '100%', background_color }) => {
  return (
    <div
      style={{
        height,
        width,
        backgroundColor: background_color || 'var(--theme-background)', // Correct syntax
      }}
    />
  );
};

export default Spacer;
