import React from "react";
import { UserWelcome } from "./UserWelcome.js";
import "./Home.css";

export const Home = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>Indulge Your Cravings With Our Delicacies...</small>

        <address className="address">
            <div>Visit Us at the Nashville East Location</div>
            <div>500 SweetTooth Way</div>
        </address>

        <UserWelcome userName={"Luz Angelique"} />

    </>
);