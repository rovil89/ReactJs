import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import EmptyCart from "../assets/img/pizza-43.gif";
import "./cards.css";

const CartWidget = () => {
const { productsAdded } = useContext(CartContext);
const count = productsAdded;

return (
    <div  >
    <Link to="/cart">
        
    <img className="carrito" src={EmptyCart}  />
    {count > 0 && (
        <span>
        {count}
        </span>
        )}
    </Link>
    </div>
);
};

export default CartWidget;