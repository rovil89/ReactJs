import { useState } from "react";
import App from "../App.css";

const productos =[
    {
    id:"1",
    name:"Jamon Crudo y Rucula",
    description: "Pizza con Jamón Crudo y Rúcula",
    stock: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzRsQYReSkkNb__G7kUYzWLTOGdOeoPL6oQ&usqp=CAU",
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
    
    productList.then((data)=>console.log({data}));

    return(
        <div>
            <ul >
                {productos.map((product)=>(
                    <div>
                        <li>{product.name}</li>
                        <img src={product.img} className="w-40 h-40" />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer