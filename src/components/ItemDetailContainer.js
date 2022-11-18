import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const itemMock =[
    {
    id:"1",
    name:"Jamon Crudo y Rucula",
    description: "Pizza con Jamón Crudo y Rúcula",
    stock: 10,
    photo: process.env.PUBLIC_URL + "/images/RucuCrudo.jpeg",
},
{
    id:"2",
    name:"Provolone",
    description: "Pizza con Queso Provolone",
    stock: 15,
    photo:process.env.PUBLIC_URL + "/images/Provolone.jpeg",
},
{
    id:"3",
    name:"Muzzarella",
    description: "Pizza con Queso Muzzarella",
    stock: 20,
    photo: process.env.PUBLIC_URL + "/images/Muzza.jpeg",
},
];
const ItemDetailContainer =() => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        new Promise((resolve) =>setTimeout (() => resolve(itemMock), 2000))
        .then((data) => setItem(data));
    }, []);
    
    if (!item){
        return <p>Loading...</p>;
    }
    return <ItemDetail item={item} />
    };

    export default ItemDetailContainer;
