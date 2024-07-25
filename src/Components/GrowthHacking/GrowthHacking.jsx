import React from 'react';
import './GrowthHacking.css';
import Subtitle from '../common/Subtitle';

const GrowthHacking = ({ subtitle, heading, text, image }) => {
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
        <div className="growth-hacking-image">
          <img src={image} alt="Growth Hacking" />
        </div>
      </div>
    </div>
  );
}

export default GrowthHacking;