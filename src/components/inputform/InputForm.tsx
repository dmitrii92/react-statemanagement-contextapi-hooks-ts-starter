import React from 'react';

import { useForm } from "react-hook-form";

export const InputForm = () => {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = handleSubmit(() => {

  });

  return (
      <form onSubmit={onSubmit}>
        <h3>Input</h3>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" ref={register({})}/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" ref={register({})}/>
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input name="age" ref={register({})}/>
        </div>
      </form>
  );
}