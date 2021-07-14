import React from "react";
import { UserWelcome } from "./UserWelcome.js";
import "./Home.css";

export const Home = () => (
    <>
         <div className="home_div">
            <h2 className="header">Kandy Korner</h2>
            <small className="slogan">Indulge Your Cravings With Our Delicacies...</small>

            <address className="directions">
                <div>Visit Us at the Nashville East Location</div>
                <div>500 SweetTooth Way</div>
            </address>

            <UserWelcome userName={"Luz Angelique"} />
        </div>
    </>
);