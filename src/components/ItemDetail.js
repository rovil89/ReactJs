import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { Item } from "./Item";
import { ItemCount } from "./ItemCount";


const ItemDetail = ({ item }) => {
    const { addItem, isInCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const maxQuantity = currentStock;

    console.log({item})

function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
}

function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
    setCurrentStock(currentStock - count);
    addItem(item, count);
    }
}

function handleCheckout() {
    navigate("/cart");
}

console.log({item})

return (
    
    <div>
    <div className="flex justify-center ">
        <img className="productoDetail" src={item.img} alt={item.name} />
    </div>
    <div className="flex flex-col justify-center pl-10">
        <h2 className="descripcionTit text-3xl font-bold ">{item.name}</h2>
        <p className="descripcion mt-4 text-xl">{item.description}</p>
        <span className="descripcion mt-4 text-xl">
        Precio:   <strong className="descripcion"> $ {item.price} ,00</strong>
        </span>
        {currentStock > 0 && (
        <p className="descripcion text-sm">En Stock: {currentStock}</p>
        )}

        <div className="flex flex-col flex-1 items-center">
        {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
        ) : (
            <span className=" text-red-500 mt-10">Sin stock</span>
        )}
        <div className="w-full flex flex-col items-center">
            <button
                onClick={handleAdd}
                type="button" className="boton btn btn-outline-success disabled:opacity-40"
                disabled={currentStock === 0}
            >
                Agregar al carrito
            </button>
            <button
                disabled={!isInCart(item.id)}
                onClick={handleCheckout}
                type="button" className="boton btn btn-outline-success disabled:opacity-50"
            >
                Finalizar Compra
            </button>
        </div>
        </div>
    </div>
    </div>
);
};

export default ItemDetail;