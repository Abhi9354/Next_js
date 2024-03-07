'use client'
import { useEffect, useState } from 'react'
import { getData, getData1 } from '../page'


const Product = () => {
const [product,setProduct] = useState([]);
const [product1,setProduct1] = useState([]);




    useEffect(()=>{
       getData().then((item)=>{
        setProduct(item)
       })
       getData1().then((item)=>{
        setProduct1(item)
       })
    },[])
    useEffect(() => {
        console.log('product',product);
        console.log('product 1',product1);
    }, [product,product1]);
  return (
    <div>
      {product.length ? product.map((item)=><h1>Item name : {item.title}</h1>):<h1></h1>}
      {product1.length ? product1.map((item)=><h1>Item name : {item.title}</h1>):<h1></h1>}

      
    </div>
  )
}

export default Product
