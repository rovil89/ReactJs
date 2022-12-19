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
        .then(res => setItem({ id: res.id, ...res.data() }))
}, [id])


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