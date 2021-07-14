import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home.js";
import { LocationProvider } from "./locations/LocationProvider.js";
import { EmployeeProvider } from "./employees/EmployeeProvider.js";
import { ProductProvider } from "./products/ProductProvider.js";
import { LocationList } from "./locations/LocationList.js";
import { ProductList } from "./products/ProductList.js";
import { EmployeeList } from "./employees/EmployeeList"
// import { EmployeeForm } from "./employees/EmployeeForm.js";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                <Route exact path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>

            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
};