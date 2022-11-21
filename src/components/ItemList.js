import Item from "./Item";
import "./cards.css";
const ItemList = ({products}) =>{
    return (
        <ul className="cardProductContainer" >
            {products.map((product) =>( 
            <Item product={product}/>
            ))}
        </ul>
    );
};
export default ItemList;