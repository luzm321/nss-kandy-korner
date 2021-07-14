import React from "react";
import { Link } from "react-router-dom";
import "./Employee.css";


export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">
          <Link to={`/employees/detail/${employee.id}`}>
            { employee.name }
          </Link>
        </h3>
        <div className="employee__location">Location: { employee.location.address}</div>
        <div className="employee__manager">Manager Position: { `${employee.manager}` }</div>
        <div className="employee__fullTime">Full Time Employee: { `${employee.fullTime}` }</div>
        {/* <div className="employee__manager">Manager: { employee.manager.toString() }</div>
        <div className="employee__fullTime">Full time: { employee.fullTime.toString() }</div> */}
        <div className="employee__hourlyRate">Hourly Rate: ${ employee.hourlyRate }/hr</div>
    </section>
);