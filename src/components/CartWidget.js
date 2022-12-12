import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import EmptyCart from "../assets/img/empty.png";
import "./cards.css";

const CartWidget = () => {
const { productsAdded } = useContext(CartContext);
const count = productsAdded;

return (
    <div >
    <Link to="/cart">
        <button type="button">
            <img className="carrito" src={EmptyCart} alt="" />
        </button>
        {count > 0 && (
        <span className=" w-4 h-4 bottom-0 -right-2 rounded-full flex justify-center items-center bg-white/70">
            {count}
        </span>
        )}
    </Link>
    </div>
);
};

export default CartWidget;