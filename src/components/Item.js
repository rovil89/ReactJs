import { useNavigate } from "react-router-dom";
import "./cards.css";

export const Item = ({ product, quantityAdded }) => {
const navigate = useNavigate();

const description = product.description.slice(0, 30);
const title = product.name.slice(0, 20);

function handleNavigate() {
    navigate(`/item/${product.id}`);
}

return (
    <div className="cardProductContainer" onClick={handleNavigate}>
        <div >
            <img  
            src={product.img}
            alt="Product" />
            <span className="descripcion ">
                {product.name.lenght > 20 ? `${title} ...` : product.name}
            </span>
            <p>
            {product.description.lenght > 30
            ? `${description} ...`
            : product.description}</p>
            <span className="descripcion">${product.price}</span>
            <span className="descripcion">
                {quantityAdded ? "Agregados" : " En Stock"}:{" "}
                {quantityAdded || product.stock}
            </span>
            <button>jsdkajghfjd</button>
        </div>
        </div>
);
};