import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Items as itemMock } from "../mocks/items.mock";
import { getFirestore, getDoc, doc } from "firebase/firestore"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams()

useEffect(() => {
    const db = getFirestore()
    const itemRef = doc(db, "items", id)
    getDoc(itemRef)
        .then((item) => {
            // Validamos si el item existe en nuestra base de datos.
            if (item.exists()) {
                // Si el item existe, lo guardamos en el estado.
                setItem({id: item.id, ...item.data()})
            }
        }).catch(err => console.error({err}))
}, []);


if (!item) {
    return ( 
        <div className="contenedorCarga">
            <div className="carga"></div>
        </div>
    );
}

return <ItemDetail item={item} />
};

export default ItemDetailContainer;