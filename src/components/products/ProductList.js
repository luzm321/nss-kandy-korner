import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider.js";
import { ProductCard } from "./ProductCard.js";

export const ProductList = () => {
 
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
    console.log("ProductList: useEffect - getProducts, Initial render before data")
    getProducts()
  }, [])


  return (
    <div className="products">
      {console.log("ProductList: Render", products)}
      {/* <h2>Products</h2> */}
      {
      
        products.map(product => {
          return <ProductCard  key={product.id}  product={product} />
        })
      }
    </div>
  )
}