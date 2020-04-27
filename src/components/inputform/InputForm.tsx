import React, {ChangeEvent, FormEvent, useState} from 'react';

import "./InputForm.css";

interface EmployeeFormProps {
  onAdd(
      firstName: string
      , lastName: string
      , age: number
  ): void
}
export const InputForm: React.FC<EmployeeFormProps> = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    let age : number;
    age = Number(e.target.value);
    setAge(age);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert("Submit")
    props.onAdd(firstName, lastName, age);
  };

  return (
      <form onSubmit={handleSubmit}>
        <h3>Input</h3>

        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" value={firstName} onChange={handleFirstNameChange}/>
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" value={lastName} onChange={handleLastNameChange}/>
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input name="age" value={age} onChange={handleAgeChange}/>
        </div>

        <input type="submit"/>
      </form>
  );
}