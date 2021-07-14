import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider.js";
import "./Employee.css";
//The useParams method from react-router-dom allows the app to read a parameter from the URL.
import { useParams, useHistory } from "react-router-dom";

//Component responsible for showing all the details of an animal:
export const EmployeeDetail = () => {
  const { getEmployeeById, fireEmployee } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
    }, [])

  const handleFireEmployee = () => {
    fireEmployee(employee.id)
      .then(() => {
        history.push("/employees")
      })
  };

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      {/* What's up with the question mark???? See below.*/}
      {/* Immediate properties of an empty object will not break, however nested properties of an empty object will. Use Optional chaining (?.) 
      //operator to prevent nested values from breaking the code. Try with and without the ?. */}
      <div className="employee__location">Location: {employee.location?.name}</div>
      <div className="employee__manager">Manager Position: { `${employee.manager}` }</div>
      <div className="employee__fullTime">Full Time Employee: { `${employee.fullTime}` }</div>
      <div className="employee__hourlyRate">Hourly Rate: ${ employee.hourlyRate }/hr</div>
      <button className="remove__btn" onClick={handleFireEmployee}>Fire Employee</button>
    </section>
  )
};