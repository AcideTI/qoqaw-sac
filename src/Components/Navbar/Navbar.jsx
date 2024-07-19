import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo1.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import RoutesPages from "../../routes/routes";
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
    console.log("Page");
  }, [pathname]);
  return (
    <>
      <RoutesPages />

      <nav className="container">
        <SocialMedia />
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
