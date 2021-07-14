import React, { useContext, useEffect } from "react";
import { EmployeeCard } from "./EmployeeCard.js";
import { EmployeeContext } from "./EmployeeProvider.js";
import "./Employee.css";


export const EmployeeList = () => {

    const { employees, getEmployees } = useContext(EmployeeContext);
  
    useEffect(() => {
      console.log("EmployeeList: useEffect - getEmployees");
      getEmployees();
    }, []);


    return (
      <>
        {/* <h2>Employees</h2> */}
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

