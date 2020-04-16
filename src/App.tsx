import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { NavBar } from "./components/navbar/NavBar";
import { InputForm } from "./components/inputform/InputForm";
import { View } from "./components/view/View";
import { Employee } from "./interfaces";

import "./App.css";
import Context, { ContextInterface } from "./context";

function App() {

  const initialEmployees: Employee[] = [
    { firstName: "Vasya", lastName: "Ivanov", age: 18, id: 0 },
    { firstName: "Ivan", lastName: "Petrov", age: 25, id: 1 },
    { firstName: "Petr", lastName: "Vasiliev", age: 111, id: 2 },
  ];

  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

  const addHandler = (firstName: string, lastName: string, age: number) => {
    const newEmployee: Employee = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      id: Date.now()
    }
    setEmployees(prev => [newEmployee, ...prev]);
  };

  // const removeEmployee = (id: number) => {
  //   setEmployees(employees.filter(employee => employee.id !== id))
  // };

  const removeEmployee: ContextInterface = {
    removeEmployee: (id: number) => {
      setEmployees(employees.filter(employee => employee.id !== id));
    }
  };

  return (
    <BrowserRouter basename="/react-statemanagement-contextapi-hooks-ts-starter">
      <Context.Provider value={removeEmployee} >
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={() => <View employees={employees} />} />
            <Route path="/create" component={() => <InputForm onAdd={addHandler} />} />
          </Switch>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
