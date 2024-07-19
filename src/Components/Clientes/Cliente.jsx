const Cliente = ({ img, text, alt, description }) => {
  return (
    <div className="container-clientes">
      <img className="img" src={img} alt={alt} />
      <div className="clientes-info">
      <h3>{text}</h3>
      <p>{description}</p>
      </div>
    </div>

  );
};

export default Cliente;
