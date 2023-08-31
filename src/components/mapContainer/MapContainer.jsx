import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../button/Button';
import './mapContainer.css';

const mapModalEl = document.getElementById('map-root');

const MapContainer = ({ close }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return createPortal(
    <div className="mapWrapper">
      <div className="map__container">
        <iframe
          className="map"
          title="coffeeShop"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d186661.76622265132!2d-73.8839405!3d43.0290143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de159b24f4e2b7%3A0x1790e5adfe27a8fc!2sDeath%20Wish%20Coffee!5e0!3m2!1sen!2sua!4v1693311345921!5m2!1sen!2sua"
          width="600"
          height="450"
          style={{ border: '0' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleIframeLoad}
        />

        {iframeLoaded && (
          <Button text="X" onClick={close} className="btn__close_map" />
        )}
      </div>
    </div>,
    mapModalEl
  );
};

export default MapContainer;
