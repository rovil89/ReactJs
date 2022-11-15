const Item =({product}) =>{
    return(
        <div>
            <li>{product.name}</li>
            <img src={product.img} />
        </div>
    );
};

export default Item;