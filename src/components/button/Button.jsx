import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.css'

const Button = ({ text, icon, onClick, className }) => {
  const buttonClass = className ? `button ${className}` : 'button';

  return (
    <button className={buttonClass} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} className="btn__icon" />}
      <span className="btn__text">{text}</span>
    </button>
  );
};

export default Button;
