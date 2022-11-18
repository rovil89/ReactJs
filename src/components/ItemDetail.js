const ItemDetail = ({ item }) =>{
    console.log({ item });
    return (
        <div>
            <div>{item.name}</div>
            <img src= {item.photo} alt="" />
        </div>
    );
};

export default ItemDetail;
