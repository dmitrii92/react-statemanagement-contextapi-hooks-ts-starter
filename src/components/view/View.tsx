import React from "react";

import { Employee } from "../../interfaces";
import { Item } from "./Item";

import "./View.css";

interface EmployeeViewProps {
  employees: Employee[]
}

export const View: React.FC<EmployeeViewProps> = (props) => {
  return (
    <div>
      <h3>Employees List</h3>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.employees.map(employee => {
            return (
              <Item
                firstName={employee.firstName}
                lastName={employee.lastName}
                age={employee.age}
                id={employee.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>);
}