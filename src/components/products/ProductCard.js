import React, { useContext } from "react";
import "./Product.css";
import { CandyOrderContext } from "../orders/CandyOrderProvider";



export const ProductCard = ({ product }) => {
    
    return (
    <>
    {/* const [order, setOrder] = useContext(CandyOrderContext);

    const handleClickSaveOrder = (event) => {
            event.preventDefault() //Prevents the browser from submitting the form
            
            
              const newOrder = {
                customerId: parseInt(order.customerId),
                locationId: parseInt(order.locationId)
              }
              addOrder(newOrder)
                .then(() => history.push("/orders"))
            } */}
          

    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <address className="product__type">Type: {product.productType.type}</address>
        <div className="product__price">Price: ${product.price}</div>
        {/* <button className="purchase_button">Purchase</button> */}
        {/* <button className="purchase_button" onClick={handleClickSaveOrder}>Purchase</button> */}
    </section>
    </>
    )
};