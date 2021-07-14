import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews.js";
import { NavBar } from "./nav/NavBar.js";
import { Login } from "./auth/Login.js";
import { Register } from "./auth/Register.js";
import "./KandyKorner.css";

export const KandyKorner = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kandy_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);