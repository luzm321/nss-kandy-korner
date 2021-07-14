import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useHistory } from "react-router-dom";



//The <Link/> component comes from the React Router package that was installed. It has an attribute named to.
//It will render a hyperlink in the DOM and when clicked, it will change the URL in the browser to the value of the to attribute.


export const NavBar = () => {
    const history = useHistory()


    let [isActive, setIsActive] = useState("home");

    
    const checkNavState = (navLocation) => {
        let activeClass = "";
        if (isActive === navLocation) {
          activeClass = "active"
        };

        return activeClass;
  
        // or....
        // return isActive === navLocation ? "active" : ""
    };

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("kandy_customer")
        history.push("/login")
    }

    return (
        <ul className="navbar">
            <li className={`navbar__item ${checkNavState("home")}`}
                onClick={() => setIsActive("home")}>
                <Link className="navbar__link" to="/">Kandy Korner</Link>
            </li>
            <li className={`navbar__item ${checkNavState("locations")}`}
                onClick={() => setIsActive("locations")}>
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className={`navbar__item ${checkNavState("products")}`}
                onClick={() => setIsActive("products")}>
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className={`navbar__item ${checkNavState("customers")}`}
              onClick={() => setIsActive("customers")}>
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className={`navbar__item ${checkNavState("employees")}`}
              onClick={() => setIsActive("employees")}>
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item" 
              onClick={(e) => {handleLogout(e)}}>
                <Link className="navbar__link" to="/login">Logout</Link>
            </li>
        </ul>
    )
};
