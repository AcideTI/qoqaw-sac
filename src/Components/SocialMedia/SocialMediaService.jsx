import React from 'react';
import './SocialMediaService.css';
import Subtitle from '../common/Subtitle';
import socialmedia from '../../assets/social-media/socialmedia-transformed1.webp';

const SocialMediaService = () => {
  return (
    <div className='social-media-container'>
      <Subtitle text="Social Media" />
      <h2>¡No se trata de conseguir más likes o corazones!</h2> 
      <div className='social-media-columns'>
        <div className='social-media-left'>
          <h3>Poder impulsar su presencia en línea, aumentar <br/>su visibilidad y llegar a un público más amplio.</h3>
          <p>No solo se trata de gestionar perfiles en redes <br/> sociales, sino de construir una presencia sólida y <br/> significativa para su marca en la vasta y dinámica <br/> red virtual.</p>
          <p>Conozca algunas razones por las cuales nuestro <br/> servicio puede ser la clave para llevar su <br/> presencia en línea al siguiente nivel</p>
        </div>
        <div className='social-media-right'>
          <img src={socialmedia} alt='Social Media' className='social-media-image' />
          <i className="fab fa-facebook-f icon"></i>
          <i className="fab fa-instagram icon"></i>
          <i className="fab fa-tiktok icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i className="fa-solid fa-heart icon"></i>
          <i className="fa-solid fa-thumbs-up icon"></i>
          <i className="fa-brands fa-linkedin icon"></i>
          <i className="fa-brands fa-telegram icon"></i>
          <i className="fa-brands fa-whatsapp icon"></i>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaService;
