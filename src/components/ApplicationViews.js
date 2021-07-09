import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home.js";
import { LocationProvider } from "./locations/LocationProvider.js";
import { LocationList } from "./locations/LocationList.js";
import { ProductProvider } from "./products/ProductProvider.js";
import { ProductList } from "./products/ProductList.js";

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
        </>
    )
};