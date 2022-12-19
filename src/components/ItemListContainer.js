import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Own components
import { ItemList } from "./ItemList";

//Firebase
import { collection, getDocs, getFirestore, snapshot, query, where} from "firebase/firestore";
import { Items } from "../mocks/items.mock";

export const ItemListContainer = () => {
const [products, setProducts] = useState([]);

const { category } = useParams();

useEffect ( ()=> {
  const db = getFirestore();
  const itemCollection = collection (db , "items");
  if (category) {
    const queryFilter = query(itemCollection, where("category", "==", category))
      getDocs(queryFilter)
        .then( res => setProducts(res.docs.map(items => ({ id: items.id, ...items.data() }))))
  } else {
    getDocs(itemCollection)
      .then(res => setProducts(res.docs.map(items => ({id: items.id, ...items.data() }))))
  }
}, [category])


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