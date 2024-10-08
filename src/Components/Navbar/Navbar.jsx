import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo1.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SocialMedia from "./SocialMedia";
import { useEffect, useState, useRef } from "react";

const ItemsNavBar = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Servicios",
    path: "/servicios",
  },
  {
    name: "Nosotros",
    path: "/nosotros",
  },
  {
    name: "Contacto",
    path: "/contacto",
  },
];

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Top of the page
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [heightNav, setHeightNav] = useState(false);
  useEffect(() => {
    const calculateHeight = () => {
      const windowHeight = window.innerHeight;
      console.log(windowHeight);
      if (windowHeight > 200) {
        setHeightNav(true);
      }
    };
    window.addEventListener("resize", calculateHeight);
    calculateHeight();
    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`container ${menuOpen ? "expanded" : ""}`}
        style={{
          position: heightNav ? "fixed" : "absolute",
        }}
      >
        <div className="social-icons-contenedor">
          <SocialMedia />
        </div>
        <img src={logo} alt="Logo" className="logo" />
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={menuOpen ? "show" : ""}>
          {ItemsNavBar.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={pathname === item.path ? "link selected" : ""}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
