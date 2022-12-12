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
// useEffect(() => {
//     new Promise((resolve) => {
//       // Reset the state to show the loading spinner
//     setProducts([]);

//       // Simulation of a call to an api
//     return setTimeout(() => {
//         resolve(Items);
//     }, 3000);
//     }).then((data) => {
//       // Execute only in the categories views
//     if (category) {
//         const categories = data.filter(
//         (product) => product.category === category
//         );

//         // Execute only in the home
//         setProducts(categories);
//     } else {
//         setProducts(data);
//     }
//     });
// }, [category]);

if (products.lenght === 0) {
    return <p>Loading...</p>;
}

return (
    <div className="cardProductContainer">
      <ItemList products={products} />
    </div>
);
};