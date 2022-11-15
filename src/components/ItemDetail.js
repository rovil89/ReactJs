const ItemDetail = ({ item }) =>{
    console.log({ item });
    return (
        <div>
            <div>{item.name}</div>
            <div>{item.img}</div>
        </div>
    );
};

export default ItemDetail;
