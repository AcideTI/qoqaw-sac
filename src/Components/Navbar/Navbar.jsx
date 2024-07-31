import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo1.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SocialMedia from "./SocialMedia";
import { useEffect } from "react";
const ItemsNavBar = [
  {
    name: "Inicio",
    path: "/",
  },

  {
    name: "Servicios",
    path:"/servicios"
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
  useEffect(() => {
    // Top of the page
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>

      <nav className="container">
        <div className="social-icons-contenedor">
        <SocialMedia />
        </div>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          {ItemsNavBar.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={pathname === item.path ? "link selected" : ""}
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
