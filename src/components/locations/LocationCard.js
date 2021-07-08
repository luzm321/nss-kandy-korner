import React from "react";
import "./Location.css";

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__location">Address: {location.address}</address>
        <div className="location__squareFootage">{location.squareFootage}</div>
        <div className="location__handicapAccessible">{location.handicapAccessible}</div>
    </section>
);