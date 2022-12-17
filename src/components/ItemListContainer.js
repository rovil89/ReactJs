import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Own components
import { ItemList } from "./ItemList";

//Firebase
import { collection, getDocs, getFirestore, snapshot} from "firebase/firestore";

export const ItemListContainer = () => {
const { category } = useParams();
const [products, setProducts] = useState([]);


useEffect ( ()=> {
  const db = getFirestore();
  const itemCollection = collection (db , "items");
  getDocs(itemCollection).then((snapshot)=>{
    const products = snapshot.docs.map ((doc) => ({
      id: doc.id, ...doc.data(),
    }));
    setProducts(products);
  });
},[]);


if (products.lenght === 0) {
    return ( <div className="contenedorCarga">
    <div className="carga"></div>
    </div>);
}

return (
    <div className="cardProductContainer">
      <ItemList products={products} />
    </div>
);
};