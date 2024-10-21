import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-950">
      <h1 className="text-3xl ml-5 mt-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}
