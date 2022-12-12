import { Item } from "./Item";

export const ItemList = ({ products }) => {
return (
    <ul className="cardProductContainer ">
    {products.map((product) => (
        <Item product={product} />
    ))}
    </ul>
);
};