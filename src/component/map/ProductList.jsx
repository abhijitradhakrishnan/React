import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
    ]
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
            <h3>Name: {product.name}</h3>
            <h4>Price: {product.price}</h4>
        </div>
      ))}
    </div>
  )
}

export default ProductList
