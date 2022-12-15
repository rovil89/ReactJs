export const ItemCount = ({ count, handleCount }) => {
    return (
    <div className="contador flex justify-center mt-10 w-4/5 bg-gray-200 rounded">
        <button
        onClick={() => handleCount("minus")}
        className="countSigno flex justify-center items-center "
        >
        -
        </button>
        <span
        id="counter"
        className="countNum flex flex-1 justify-center items-center mx-4 font-white"
        >
        {count}
        </span>
        <button
        onClick={() => handleCount("plus")}
        className="countSigno flex justify-center items-center"
        >
        +
        </button>
    </div>
    );
};