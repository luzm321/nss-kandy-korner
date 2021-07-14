import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider.js";
import { LocationCard } from "./LocationCard.js";


export const LocationList = () => {
 
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    console.log("LocationList: useEffect - getLocations, Initial render before data")
    getLocations()

  }, []);

  return (
    <>
    <h2 className="locationHeader">Locations</h2>
    <div className="locations">
      {console.log("LocationList: Render", locations)}
      {/* <h2>Locations</h2> */}
      {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
      }
    </div>
    </>
  )
};