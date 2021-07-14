import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home.js";
import { LocationProvider } from "./locations/LocationProvider.js";
import { EmployeeProvider } from "./employees/EmployeeProvider.js";
import { ProductProvider } from "./products/ProductProvider.js";
import { CustomerProvider } from "./customers/CustomerProvider.js";
import { LocationList } from "./locations/LocationList.js";
import { ProductList } from "./products/ProductList.js";
import { EmployeeList } from "./employees/EmployeeList";
import { CustomerList } from "./customers/CustomerList.js";
import { EmployeeForm } from "./employees/EmployeeForm.js";
import { EmployeeDetail } from "./employees/EmployeeDetail.js";

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

            <CustomerProvider>
                    <Route exact path="/customers">
                        <CustomerList />
                    </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>

                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                    
                    <Route exact path="/employees/detail/:employeeId(\d+)">
                        <EmployeeDetail />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
};