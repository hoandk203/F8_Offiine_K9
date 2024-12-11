"use client"
import { useRef, useState } from "react";

const ProductList = () => {
    const [isShow, setIsShow]= useState(true)


    const handleClick=()=>{
        setIsShow(!isShow)
        
    }
  return (
    <div>
        <h1>Products</h1>
        {isShow && (
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore error consequatur est harum ut dolor beatae aliquam, repellat ullam praesentium!</p>
        )}
        <button onClick={handleClick}>Thu gọn</button>
    </div>
  )
}

export default ProductList