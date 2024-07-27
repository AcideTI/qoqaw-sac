import React from 'react';
import './GrowthHacking.css';
import Subtitle from '../common/Subtitle';
import videobinario from '../../assets/binario.mp4';
import code from '../../assets/code-video.mp4';

const GrowthHacking = ({ subtitle, heading, text, image, overlay, overlayHeading, overlaySubheading, imagePosition = 'right', showOverlayVideoBinario, showOverlayVideoCode }) => {
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
          <div className="growth-hacking-image">
            <img className="growth-hacking-img" src={image} alt="Growth Hacking" />
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