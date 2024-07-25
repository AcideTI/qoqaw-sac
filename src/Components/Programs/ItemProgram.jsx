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

  return (
    <Link to={ref} className="program" ref={programRef}>
      <img src={img} alt={alt} className="program-img" loading="lazy" />
      <div className="program-info">
        <h2>{alt}</h2>
        <i className={icon}></i>
      </div>
    </Link>
  );
};

export default ItemProgram;