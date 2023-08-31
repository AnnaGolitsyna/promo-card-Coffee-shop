import React, { useState } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import MapContainer from '../mapContainer/MapContainer';

const Footer = () => {
  const [showMap, setShowMap] = useState(false);

  const handleLocationClick = () => {
    setShowMap(!showMap);
  };
  return (
    <div className="footer">
      <div className="location">
        <div
          className="location__adress location_hover"
          onClick={handleLocationClick}
        >
          <FontAwesomeIcon icon={faLocationDot} className="location__icon" />
          <span className="location__label">Round Lake, NY</span>
        </div>
        <a
          className="location_hover"
          href="https://www.deathwishcoffee.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="location__adress">
            <FontAwesomeIcon icon={faNewspaper} className="location__icon" />
            <span className="location__label">deathwishcoffee.com</span>
          </div>
        </a>
      </div>
      {showMap && <MapContainer close={handleLocationClick} />}
      {/* <a
        className="link__buying"
        href="https://www.deathwishcoffee.com/products/death-wish-coffee"
        target="_blank"
        rel="noopener noreferrer"
      >
        BUY NOW
      </a> */}
      <a
      className='link__wrapper'
        href="https://www.deathwishcoffee.com/products/death-wish-coffee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="link__buying">BUY NOW</div>
      </a>
    </div>
  );
};

export default Footer;
