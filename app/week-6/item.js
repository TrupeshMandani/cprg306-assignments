// item.js
const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2  flex flex-col h-auto rounded-sm max-w-sm m-4 bg-slate-900  bg-opacity-1">
      <span className="text-2xl font-extrabold ">{name}</span>
      <span className="font-semibold">
        {" "}
        Buy {quantity} in {category}
      </span>
    </li>
  );
};

export default Item;
