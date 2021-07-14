import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EmployeeCard } from "./EmployeeCard.js";
import { EmployeeContext } from "./EmployeeProvider.js";
import "./Employee.css";


export const EmployeeList = () => {

    const { employees, getEmployees } = useContext(EmployeeContext);
  
    useEffect(() => {
      console.log("EmployeeList: useEffect - getEmployees");
      getEmployees();
    }, []);

    const history = useHistory();


    return (
      <>
        <h2 className="employeeHeader">Employees</h2>
		    <button className="addEmpBut" onClick={() => {history.push("/employees/create")}}>
            Add New Employee
        </button>
        {console.log("EmployeeList: Render", employees)}
        <div className="employees">
            {
                employees.map(employee => {
                    return <EmployeeCard key={employee.id} employee={employee} />
                })
            }
        </div>
      </>
    )
};

