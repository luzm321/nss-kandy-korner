import React from "react";
import "./Employee.css";


export const EmployeeCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{ employee.name }</h3>
        <div className="employee__location">{ employee.location.address}</div>
        <div className="employee__manager">Manager: { `${employee.manager}` }</div>
        <div className="employee__fullTime">Full time: { `${employee.fullTime}` }</div>
        {/* <div className="employee__manager">Manager: { employee.manager.toString() }</div>
        <div className="employee__fullTime">Full time: { employee.fullTime.toString() }</div> */}
        <div className="employee__hourlyRate">Hourly Rate: ${ employee.hourlyRate }/hr</div>
    </section>
);