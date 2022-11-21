import "./cards.css"
const Item = ({ product }) => {
    return (
    <div data-aos="zoom-in-up" className="pizza">
        <li className="nombre">{product.name}</li>
        <img src={product.img} />
        <li className="descripcion">{product.description}</li>
        <button type="button" className="boton btn btn-outline-success">La Necesito</button>
    </div>
    );
};

export default Item;