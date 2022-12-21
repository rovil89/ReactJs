import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import EmptyCart from "../assets/img/pizza-43.gif";
import "./cards.css";


const CartWidget = () => {
const { itemsCounter } = useContext(CartContext);

return (
    <div  >
        <Link to="/cart">
        
            <img className="carrito" src={EmptyCart}  />
            
            </Link>
        <div className="productsNumber">{itemsCounter() > 0 && (
            <span>
                {itemsCounter()}
            </span>
        )}</div>
        
    </div>
);
};

export default CartWidget;