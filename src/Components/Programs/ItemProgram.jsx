import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ItemProgram = ({ item }) => {
  const programRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add('animate');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (programRef.current) {
      observer.observe(programRef.current);
    }

    return () => {
      if (programRef.current) {
        observer.unobserve(programRef.current);
      }
    };
  }, []);

  const { img, alt, icon, ref } = item;

  // Usar srcset para cargar diferentes tamaños de imagen dependiendo de la resolución de la pantalla
  const srcSet = `
    ${img}-240w.webp 240w,
    ${img}-480w.webp 480w,
    ${img}-800w.webp 800w
  `;

  const sizes = `
    (max-width: 480px) 240px,
    (max-width: 800px) 480px,
    800px
  `;

  return (
    <Link to={ref} className="program" ref={programRef}>
      <picture>
        <source srcSet={srcSet} sizes={sizes} type="image/webp" />
        <source srcSet={srcSet.replace(/webp/g, 'jpg')} sizes={sizes} type="image/jpeg" />
        <img src={`${img}-240w.jpg`} alt={alt} className="program-img" loading="lazy" />
      </picture>
      <div className="program-info">
        <h2>{alt}</h2>
        <i className={icon}></i>
      </div>
    </Link>
  );
};

export default ItemProgram;
