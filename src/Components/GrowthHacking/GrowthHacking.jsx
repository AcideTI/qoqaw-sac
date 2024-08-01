import React, { useState } from 'react';
import './GrowthHacking.css';
import Subtitle from '../common/Subtitle';
import videobinario from '../../assets/binario.mp4';
import code from '../../assets/code-video.mp4';

const GrowthHacking = ({ subtitle, heading, text, image, uiImage, overlay, overlayHeading, overlaySubheading, imagePosition = 'right', showOverlayVideoBinario, showOverlayVideoCode, switchAvailable }) => {
  const [selectedOption, setSelectedOption] = useState('UX');
  const [currentImage, setCurrentImage] = useState(image);

  const handleSwitch = () => {
    if (selectedOption === 'UX') {
      setSelectedOption('UI');
      setCurrentImage(uiImage);
    } else {
      setSelectedOption('UX');
      setCurrentImage(image);
    }
  };

  return (
    <div className={`growth-hacking-container`}>
      <div className="growth-hacking-text">
        <Subtitle text={subtitle} />
        <h2>{heading}</h2>
      </div>
      <div className={`growth-hacking-content ${imagePosition === 'left' ? 'image-left' : 'image-right'}`}>
        <div className="growth-hacking-text-content">
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
        <div className={`growth-hacking-image-container ${overlay ? 'overlay-enabled' : ''}`}>
          {switchAvailable && (
            <div className="switch-container" onClick={handleSwitch}>
              <div className={`switch ${selectedOption === 'UX' ? 'ux' : 'ui'}`}>
                {selectedOption === 'UX' ? 'Diseño UX' : 'Diseño UI'}
              </div>
            </div>
          )}
          <div className="growth-hacking-image">
            <img className="growth-hacking-img" src={currentImage} alt="Growth Hacking" />
            {(showOverlayVideoBinario || showOverlayVideoCode) && (
              <div className="growth-hacking-video-container">
                <video className="growth-hacking-video" autoPlay muted loop>
                  <source src={showOverlayVideoBinario ? videobinario : showOverlayVideoCode ? code : ''} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
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