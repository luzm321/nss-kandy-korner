import React, { useState, createContext } from "react";


export const CandyOrderContext = createContext();

export const CandyOrderProvider = (props) => {

    const [orders, setOrders] = useState([]);

    const getOrders = () => {
        return fetch("http://localhost:8088/orders?_expand=product&_expand=customer")
        .then(res => res.json())
        .then(setOrders)
    };

    const addOrder = (orderObj) => {
        return fetch("http://localhost:8088/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderObj)
        })
        .then(getOrders)
    };

    return (
        <CandyOrderContext.Provider value={{
            orders, getOrders, addOrder
        }}>
            {props.children}
        </CandyOrderContext.Provider>
    )


};