function Item({ name, quantity, category}) {
    return (
        <li className="flex justify-between p-4 bg-slate-900 m-5">
            <div>
                <h3 className="text-lg font-bold text-white-800">{name}</h3>
                <p className="text-sm text-white-500">Buy {quantity} in {category}</p>
            </div>
        </li>
    );
}

export default Item;
