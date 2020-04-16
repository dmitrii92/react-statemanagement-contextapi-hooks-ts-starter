import React, { useState } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import { NavBar } from "./components/navbar/NavBar";
import { InputForm } from "./components/inputform/InputForm";
import { View } from "./components/view/View";
import { Employee } from "./interfaces";

function App() {

  const initialEmployees: Employee[] = [
    { firstName: "Vasya", lastName: "Ivanov", age: 18 },
    { firstName: "Ivan", lastName: "Petrov", age: 25 },
    { firstName: "Petr", lastName: "Vasiliev", age: 111 },
  ];

  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

  const addHandler = (firstName: string, lastName: string, age: number) => {
    const newEmployee: Employee = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    setEmployees(prev => [newEmployee, ...prev]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => <View employees={employees} />} />
          <Route path="/create" component={() => <InputForm onAdd={addHandler} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
