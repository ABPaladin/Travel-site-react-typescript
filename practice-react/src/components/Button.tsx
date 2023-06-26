import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  buttonStyle?: string;
  buttonSize?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
const checkButtonStyle = (buttonStyle as string)
  ? buttonStyle
  : [0];

const checkButtonSize = (buttonSize as string)
  ? buttonSize
  : [0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;