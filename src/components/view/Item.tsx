import React from "react";

import { Employee } from "../../interfaces"

export const Item: React.FC<Employee> = (employee) => {
  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.age}</td>
    </tr>
  );
}