import React from 'react';
import './Programs.css';
import program_1 from '../../assets/marketing.jpg';
import program_2 from '../../assets/branding.jpg';
import program_3 from '../../assets/software.png';
import program_4 from '../../assets/investigacion.webp';
import program_5 from '../../assets/plan.jpg';
import ItemProgram from './ItemProgram';
import Subtitle from '../common/Subtitle';
const ItemsPrograms = [
  {
    img: program_1,
    alt: "Marketing",
    icon: "fa-solid fa-globe",
  },
  {
    img: program_2,
    alt: "Branding",
    icon: "fa-regular fa-folder",
  },
  {
    img: program_3,
    alt: "Software",
    icon: "fa-solid fa-code",
  },
  {
    img: program_4,
    alt: "Investigación",
    icon: "fa-solid fa-ranking-star",
  },
  {
    img: program_5,
    alt: "Plan",
    icon: "fa-solid fa-square-poll-horizontal",
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