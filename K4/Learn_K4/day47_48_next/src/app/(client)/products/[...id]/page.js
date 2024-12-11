import React from 'react'

const ProductDetail = async ({params, searchParams}) => {
    const {id}= await params
    console.log(await searchParams)
    console.log(await params);

  return (
    <div>
        <h1>ProductDetail: {id[0]} </h1>
    </div>
  )
}

export default ProductDetail