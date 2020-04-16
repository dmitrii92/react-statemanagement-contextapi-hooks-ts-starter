import React from 'react';
import { useForm } from "react-hook-form";

import "./InputForm.css";

interface EmployeeFormProps {
  onAdd(
    firstName: string
    , lastName: string
    , age: number
  ): void
}

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
}

export const InputForm: React.FC<EmployeeFormProps> = (props) => {
  const { register, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = (value: FormData) => {
    props.onAdd(value.firstName, value.lastName, value.age);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Input</h3>

      <div>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" ref={register({})} />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" ref={register({})} />
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input name="age" ref={register({})} />
      </div>

      <input type="submit" />
    </form>
  );
}