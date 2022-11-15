import { useState } from "react";
import App from "../App.css";
import ItemList from "./ItemList";

const productos =[
    {
    id:"1",
    name:"Jamon Crudo y Rucula",
    description: "Pizza con Jamón Crudo y Rúcula",
    stock: 10,
    img: "https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/pizza-de-jamon-crudo-rucula-y-tomates-secos.jpg?itok=jdGKX1y9",
},
{
    id:"2",
    name:"Provolone",
    description: "Pizza con Queso Provolone",
    stock: 15,
    img:"https://i0.wp.com/cuciniana.com/wp-content/uploads/cuciniana-receta-platos-salados-pizza-masa-madre-casera-queso-provolone-800.jpg?w=1200&ssl=1,"
},
{
    id:"3",
    name:"Muzzarella",
    description: "Pizza con Queso Muzzarella",
    stock: 20,
    img:"https://pastaselaguila.ar/wp-content/uploads/2021/10/215.jpg"
},
];
const ItemListContainer =({greeting}) => {
    const [products, setProducts] = useState([]);

    const productList = new Promise ((resolve) =>
    setTimeout (()=>{
        resolve(productos);
    },2000)
    );
    
    productList.then((data)=>setProducts(data));

    return(
        <div>
            <ItemList products={products} />  
        </div>
    );
};

export default ItemListContainer