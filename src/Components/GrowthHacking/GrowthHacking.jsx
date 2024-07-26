import React from 'react';
import './GrowthHacking.css';
import Subtitle from '../common/Subtitle';

const GrowthHacking = ({ subtitle, heading, text, image, overlay, overlayHeading, overlaySubheading }) => {
  return (
    <div className="growth-hacking-container">
      <div className="growth-hacking-text">
        <Subtitle text={subtitle} />
        <h2>{heading}</h2>
      </div>
      <div className="growth-hacking-content">
        <div className="growth-hacking-text-content">
          <p>{text}</p>
        </div>
        <div className={`growth-hacking-image-container ${overlay ? 'overlay-enabled' : ''}`}>
          <div className="growth-hacking-image">
            <img className="growth-hacking-img" src={image} alt="Growth Hacking" />
            {overlay && (
              <div className="overlay-branding">
                <h1>{overlayHeading}</h1>
                <h2>{overlaySubheading}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowthHacking;