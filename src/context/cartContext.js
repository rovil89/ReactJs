import React, {createContext, useState} from "react";


export const cartContext = createContext ([]);
export const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([]);

    function addItem(item) {
        setCarrito(carrito.push(item));
    }
    function removeItem(itemId){
        setCarrito(carrito.filter((item) => item.id !== itemId));
    }
    function clear(){
        setCarrito ([]);
    }
    function isInCart(itemId){
        return Boolean(carrito.find((item) => itemId === itemId));
    }
    return (
        <Context.Provider value={{ state, setState, addItem, removeItem, clear}}>
            {children}
        </Context.Provider>
    );
};