import React from 'react';
import style from '../css/CustomButton.module.scss'; // Import the CSS file for styling

// Define the props interface
interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset'; // Optional prop for the button type
  disabled?: boolean; // Optional prop for disabled state
  className?: string; // Optional custom class for styling
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick, type = 'button', disabled = false, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${style.customButton} ${className}`} // Add a base class for styling
    >
      {text}
    </button>
  );
};

export default CustomButton;
