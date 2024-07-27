import React from 'react';
import packaging from "../assets/packaging/packaging.webp";
import GrowthHacking from '../Components/GrowthHacking/GrowthHacking';
import Packaging from '../Components/Packaging/Packaging';

const DisenioPackagingPage = () => {
  return (
    <div>
      <GrowthHacking
        subtitle="DISEÑOS Y ELABORACION DE PACKAGING"
        text="Tener buena imagen que represente claramente nuestros valores y compromiso con la calidad y las buenas prácticas puede ser el elemento diferenciador que influya en la decisión de compra de un consumidor. Por lo que, un buen diseño de packaging puede ser el factor que haga que una persona se decida a adquirir un producto u otro. <br /> <br /> Está comprobado que la decisión de compra está basada en gran medida en un componente emocional, es por ello que se requiere mejorar la imagen de los productos y marca."
        image={packaging}
        imagePosition="left"
      />
      <Packaging />
    </div>
  );
}

export default DisenioPackagingPage;
