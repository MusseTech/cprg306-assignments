
const Item = ({ name, quantity, category, onSelect }) => {
    return (
        <li className="p-6 bg-black rounded-lg shadow-md border border-gray-700 text-white cursor-pointer hover:bg-gray-800 transition-colors" onClick={() => onSelect({ name, quantity, category })}>  
            <div className="font-bold text-lg">
                {name}
            </div>       
            <div className="text-base mt-2 text-gray-300"> 
                Quantity: {quantity}
            </div>
            <div className="text-base capitalize text-gray-300">
                Category: {category}
            </div>
        </li>
    );
};

export default Item;