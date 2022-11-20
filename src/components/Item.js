import "./cards.css"
const Item = ({ product }) => {
    return (
    <div className="pizza">
        <li className="nombre">{product.name}</li>
        <img src={product.img} />
    </div>
    );
};

export default Item;