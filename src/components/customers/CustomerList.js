import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider.js";
import { CustomerCard } from "./CustomerCard.js";
import "./Customer.css";

export const CustomerList = () => {

    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("CustomersList: useEffect - getCustomers")
        getCustomers()
    }, []);

    return (
        <>
            <h2 className="customerHeader">Customers</h2>
            <div className="customers">
                {console.log("CustomerList: Render", customers)}
                {
                    customers.map(customer => {
                        return <CustomerCard key={customer.id} customer={customer} />
                    })
                }
            </div>
        </>
    )
};