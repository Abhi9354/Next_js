'use client'

import { useRouter } from "next/navigation";

const ProductButton = ({id}) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/products/${id}`)
    };
  return (
    <div className="border-4 border-pink-500 w-20">
      <button onClick={handleClick}>go to product</button>
    </div>
  )
}

export default ProductButton
