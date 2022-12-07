import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

export const Cart = () => {
const { cart } = useContext(cartContext)

if(cart.lenght === 0){
    return (
        <h1>Aún no agregaste productos, puedes verlos <Link to="/">Acá</Link> </h1>
    )
}
return(
    <>
        {cart.map((product) =>{
            <h1 key={product.id}> {product.name} </h1>
        })}
    </>
);
};