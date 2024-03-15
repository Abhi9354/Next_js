



const Product = ({prod}) => {
  return (
    <div className="border w-96">
      <p>{prod.title}</p>
      <p>{prod.price}</p>
      
    </div>
  )
}

export default Product
