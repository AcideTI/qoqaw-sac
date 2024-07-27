import "./Packaging.css";
import bolsas from "../../assets/packaging/bolsas.webp";
import cajas from "../../assets/packaging/cajas.webp";
import envolturas from "../../assets/packaging/envolturas.webp";
import papel from "../../assets/packaging/papel.webp";

const Packaging = () => {
  return (
    <div className="packaging-grid-container">
      <div className="packaging-image-card">
        <img src={bolsas} alt="Bolsas" className="packaging-circular-image" />
        <div className="packaging-hover-overlay">
          <h3>Bolsas</h3>
          <p>Kraft con asa</p>
          <p>Planas</p>
        </div>
      </div>
      <div className="packaging-image-card">
        <img src={cajas} alt="Cajas" className="packaging-circular-image" />
        <div className="packaging-hover-overlay">
          <h3>Cajas</h3>
          <p>Alimentos</p>
          <p>E-commerce</p>
          <p>Bebidas</p>
          <p>Bocaditos</p>
          <p>Joyería</p>
        </div>
      </div>
      <div className="packaging-image-card">
        <img
          src={envolturas}
          alt="Envolturas"
          className="packaging-circular-image"
        />
        <div className="packaging-hover-overlay">
          <h3>Envolturas</h3>
        </div>
      </div>
      <div className="packaging-image-card">
        <img src={papel} alt="Papel" className="packaging-circular-image" />
        <div className="packaging-hover-overlay">
          <h3>Papel antigras </h3>
          <h3>y pisos</h3>
        </div>
      </div>
    </div>
  );
};

export default Packaging;
