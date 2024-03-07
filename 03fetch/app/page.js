import Button from "./components/Button";
import Product from "./product/page";

export async function getData() {
  const response = await fetch('https://fakestoreapi.com/products',{ cache: 'force-cache' },{ next: { revalidate: 3600 } })
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 let data = await response.json()
  return data;
}
export async function getData1() {
  const response = await fetch('https://dummyjson.com/products',{ cache: 'force-cache' },{ next: { revalidate: 3600 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 let data = await response.json()
  return data.products;
}
export default async function Home() {
  const data = await getData();
  console.table('data is ',data);
  return (
     <div>
      <h1>main pain</h1>
      <Button/>
     </div>
  );
}
