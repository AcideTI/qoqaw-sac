import React from "react";
import "./Servicios.css";
import community from "../../assets/marketing-digital/community.webp";
import social from "../../assets/marketing-digital/social.webp";
import seo from "../../assets/marketing-digital/seo.webp";
import growth from "../../assets/marketing-digital/growth.webp";
import publicidad from "../../assets/marketing-digital/publicity.webp";
import Subtitle from "../common/Subtitle";
import ItemProgram from "../Programs/ItemProgram";
const ItemsPrograms = [
  {
    img: community,
    alt: "Community Manager",
    icon: "fa-solid fa-globe",
  },
  {
    img: social,
    alt: "Social Media",
    icon: "fa-regular fa-folder",
  },
  {
    img: seo,
    alt: "Posicionamiento SEO",
    icon: "fa-solid fa-code",
  },
  {
    img: growth,
    alt: "Growth Hacking",
    icon: "fa-solid fa-ranking-star",
  },
  {
    img: publicidad,
    alt: "Publicidad Digital",
    icon: "fa-solid fa-square-poll-horizontal",
  },
];
const MarketingDigitalService = () => {
  return (
    <div className="service">
      <Subtitle text="Marketing Digital" />
      <div className="service-container">
        {ItemsPrograms.map((item, index) => (
          <ItemProgram key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketingDigitalService;
