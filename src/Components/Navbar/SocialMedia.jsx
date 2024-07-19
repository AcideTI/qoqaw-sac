import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const ItemsSocialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: "fab fa-facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: "fab fa-instagram",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: "fab fa-linkedin-in",
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: "fab fa-x-twitter",
  },
];
const SocialMedia = () => {
  return (
    <div className="social-icons">
      {ItemsSocialMedia.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
