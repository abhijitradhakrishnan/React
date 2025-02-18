import React from 'react'

const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 1200,
        availabilty: "In stock"
    }
  return (
    <div>
      <h1>Name: {product.name}</h1>
      <h1>Price: ${product.price}</h1>
      <h1>Availabilty: {product.availabilty}</h1>
    </div>
  )
}

export default ProductInfo
