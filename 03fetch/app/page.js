import Button from "./components/Button";

export async function getData() {
  const response = await fetch(
    "https://fakestoreapi.com/products",
    { cache: "force-cache" },
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  let data = await response.json();
  return data;
}
export async function getData1() {
  const response = await fetch(
    "https://dummyjson.com/products",
    { cache: "force-cache" },
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  let data = await response.json();
  return data.products;
}
export default async function Home() {
  const data = await getData();
  console.table("data is ", data);
  return (
    <div>
      <h1>main pain</h1>
      <Button />
    </div>
  );
}
