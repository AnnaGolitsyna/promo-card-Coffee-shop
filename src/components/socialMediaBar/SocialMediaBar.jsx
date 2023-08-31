import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './socialMediaBar.css';
import { socMediaData } from '../../gateway/socialMediaData';

const SocialMediaBar = () => {
  return (
    <div className="iconsGroup">
      {socMediaData.map(({ name, icon, href }) => {
        return (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} className={`icon icon_${name}`} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaBar;
