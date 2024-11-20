export async function GET() {
  const dogs = [
    {
      id: 1,
      name: "luna",
      age: 2,
    },
    {
      id: 2,
      name: "bella",
      age: 3,
    },
  ];
  return dogs;
}
// create a new dog
// post req for  /api/dogs
export async function POST(req) {
  const { name, age } = await req.json();
  const newDog = {
    id: Math.random(),
    name,
    age,
  };
  return newDog;
}
