import React from 'react';
import './Button.css'; 

interface ButtonProps {
  text: string;
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, secondary }) => {
  return (
    <button className={`button ${secondary ? 'secondary' : 'primary'}`}>
      {text}
    </button>
  );
};

export default Button;
