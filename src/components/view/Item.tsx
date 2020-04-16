import React, { useContext } from "react";

import { Employee } from "../../interfaces"
import Context from "../../context";

export const Item: React.FC<Employee> = (employee) => {
  // const {removeEmployee } = useContext(Context);

  return (
    <Context.Consumer>
      {context => (
        <tr>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.age}</td>
          <td><button onClick={() => context?.removeEmployee(employee.id)}>&times;</button></td>
        </tr>
      )}
    </Context.Consumer>
  );
}