export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="cursor-pointer p-4 bg-gray-700 rounded-lg mb-2 hover:bg-gray-600"
    >
      <p className="text-lg font-bold flex items-center gap-2">
        {name}
        <span role="img" aria-label={name}>
          {category === "Produce"
            ? "🍌"
            : category === "Bakery"
            ? "🍞"
            : category === "Dairy"
            ? "🥛"
            : "🍖"}
        </span>
      </p>
      <p className="text-sm text-gray-300">
        Buy {quantity} in {category.toLowerCase()}
      </p>
    </li>
  );
}
