import React from "react";
import "./Product.css";

export const ProductCard = ({ product }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <address className="product__type">Type: {product.productType.type}</address>
        <div className="product__price">Price: ${product.price}</div>
    </section>
);