import React from 'react';
import './Programs.css';
import program_1 from '../../assets/marketing.webp';
import program_2 from '../../assets/branding.webp';
import program_3 from '../../assets/software.webp';
import program_4 from '../../assets/investigacion.webp';
import program_5 from '../../assets/plan.webp';
import ItemProgram from './ItemProgram';
import Subtitle from '../common/Subtitle';
const ItemsPrograms = [
  {
    img: program_1,
    alt: "Marketing Digital",
    icon: "fa-solid fa-globe",
    ref: "/servicios",
  },
  {
    img: program_2,
    alt: "Branding & Diseño",
    icon: "fa-regular fa-folder",
    ref: "/servicios",
  },
  {
    img: program_3,
    alt: "Software",
    icon: "fa-solid fa-code",
    ref: "/servicios",
  },
  {
    img: program_4,
    alt: "Investigación",
    icon: "fa-solid fa-ranking-star",
    ref: "/servicios"
  },
  {
    img: program_5,
    alt: "Plan de Marketing",
    icon: "fa-solid fa-square-poll-horizontal",
    ref: "/servicios"
  },
];
const Programs = () => {
  return (
    <div className='programs'>
      <Subtitle text='Nuestros Programas'/>
      <div className="programs-container">
        {ItemsPrograms.map((item, index) => (
          <ItemProgram key={index} item={item} />
          
        ))}
      </div>
    </div>
  );
}

export default Programs;