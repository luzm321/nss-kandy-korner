import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider.js";
import { ProductCard } from "./ProductCard.js";
import "./Product.css";

export const ProductList = () => {
 
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
    console.log("ProductList: useEffect - getProducts, Initial render before data")
    getProducts()
  }, [])



  return (
    <>
      <h2 className="productHeader">Products</h2>
      
      <div className="products">
        {console.log("ProductList: Render", products)}
        {/* <h2>Products</h2> */}
        {
        
          products.map(product => {
            return <ProductCard  key={product.id}  product={product} />
          })
        }
      </div>
    </>
  )
}