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
    <div onClick={handleNavigate}>
        <div className="producto">
            <img  
            src={product.img}
            alt="Product" />
            <span className="descripcionTit ">
                {product.name.lenght > 20 ? `${title} ...` : product.name}
            </span>
            <p>
            {product.description.lenght > 30
            ? `${description} ...`
            : product.description}</p>
            <span className="descripcionPrecio">${product.price}</span>
            <hr />
            <span className="descripcionP">
                {quantityAdded ? "Agregados" : " En Stock"}:{" "}
                {quantityAdded || product.stock}
            </span>
        </div>
        </div>
);
};