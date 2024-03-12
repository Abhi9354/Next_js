import Product from "../components/Product";
import ProductButton from "../components/ProductButton";

const getProducts = async() => {
    const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    const data = await response.json();
    console.log('data is ',data);
    return data.products
};
const Products = async() => {
  const product = await getProducts();
  console.log('products',product);
  return (
    <div >
     <h1 className="w-full text-center text-5xl">Products</h1>
     {product.length>0 && (product.map((item)=>(<div className="h-full justify-center items-center  flex-col flex "><Product prod={item}/>
     <ProductButton id={item.id}/></div>)

     ))}
    </div>
  )
}

export default Products
