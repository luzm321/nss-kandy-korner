import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../locations/LocationProvider.js";
import { EmployeeContext } from "../employees/EmployeeProvider.js";
import { useHistory } from 'react-router-dom';
import "./Employee.css";

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)
 

  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0,
    manager: false,
    fullTime: false,
    hourlyRate: 0
  });

  const history = useHistory();


  useEffect(() => {
    getLocations()
  }, [])

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEmployee = { ...employee }
    /* Employee is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEmployee[event.target.id] = event.target.value
    // update state
    setEmployee(newEmployee)
  }

  const handleClickSaveEmployee = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const locationId = parseInt(employee.locationId)

    if (employee.name === "" || locationId === 0 || employee.hourlyRate === 0) {
      window.alert("Please provide values for all input fields.")
    } else {
      //Invoke addEmployee passing the new employee object as an argument
      //Once complete, change the url and display the employee list

      const newEmployee = {
        name: employee.name,
        locationId: locationId,
        manager: employee.manager,
        fullTime: employee.fullTime,
        hourlyRate: employee.hourlyRate
      }
      addEmployee(newEmployee)
        .then(() => history.push("/employees"))
    }
  }

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label className="employeeName" htmlFor="name">Employee name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" value={employee.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label className="employeeLocation" htmlFor="location">Assign to location: </label>
          <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
            <div className="form-group">
              <label className="managerPosition" htmlFor="manager">Manager Position: </label>
              <select name="manager" id="manager" className="form-control" value={employee.manager} onChange={handleControlledInputChange}>
                <option value="0">False</option>
                <option value="1">True</option> 
              </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
              <label className="fullTimeStatus" htmlFor="fullTime">Full Time Employee: </label>
              <select name="fullTime" id="fullTime" className="form-control" value={employee.fullTime} onChange={handleControlledInputChange}>
                <option value="0">False</option>
                <option value="1">True</option> 
              </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
              <label className="rate" htmlFor="hourlyRate">Hourly Rate:</label>
              <input type="text" id="hourlyRate" required autoFocus className="form-control" placeholder="HourlyRate" value={employee.hourlyRate} onChange={handleControlledInputChange} />
            </div>
        </fieldset>     
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
          </button>
    </form>
  )
}