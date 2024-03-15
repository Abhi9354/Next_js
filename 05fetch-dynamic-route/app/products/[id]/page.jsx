import Product from "@/app/components/Product";

const generatingStaticParams = async() => {
  const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
  const data = await response.json();
  console.log('data is ',data);
  return data.products.map((prod)=>({
  id:prod.id.toStirng()}))
};


const getPRoduct= async(id)=>{
   const res= await fetch(`https://dummyjson.com/products/${id}`)
   const data = await res.json()
   console.log("data is ",data)
   return data
}



const Productpage = async({params}) => {
  const product = await getPRoduct(params.id)
  console.log(product)
  return (
    <div className="flex justify-center items-center h-screen text-6xl">
      <Product prod={product}/>
    </div>
  )
}

export default Productpage
