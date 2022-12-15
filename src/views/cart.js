import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/img/empty.png";
import { Item } from "../components/Item";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import "../components/cards.css";
import Checkout from "../components/Checkout/checkout";


const CartView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

const { productsAdded, clear, totalAmount } = useContext(CartContext);

const handleFinalizePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
    clear();
    setIsLoading(false);
    alert("Compra Finalizada");
    navigate("/");
    }, 2000);
};

return (
    <Layout>
    <div className="flex flex-col max-w-[50%]">
        {productsAdded === 0 ? (
        <div className="flex flex-col items-center justify-center">
            <img className="carrito" src={EmptyCart} alt="Empty Cart"  />
            <h1>No has agregado productos</h1>
            <button
            onClick={() => navigate("/")}
            className="rounded-lg p-2 bg-blue text-white mt-4"
            >
            Inicio
            </button>
        </div>
        ) : (
        <div>
            <div className="flex gap-4">
            {productsAdded && productsAdded.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                <div >
                    <Item
                    product={product.item}
                    quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                </div>
                );
            })}
            </div>
            <div className="flex justify-end mt-4">
            {isLoading ? (
                ( <div className="contenedorCarga">
                <div className="carga"></div>
            </div>)
            ) : (
                <div className="mb-3 flex">
                <span className="text-white text-size-large">Total a pagar: ${totalAmount},00</span>
                <hr />
                <button
                    onClick={handleFinalizePurchase}
                    className="btn btn-primary"
                >
                    Finalizar Compra
                </button>
                <Checkout />
                </div>
            )}
            </div>
        </div>
        )}
    </div>
    
    </Layout>
);
};

export default CartView;