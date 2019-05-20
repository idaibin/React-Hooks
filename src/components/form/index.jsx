import React from "react";
import "./index.css";
import { useInput, useInputNumber } from '../../hooks'


const Form = () => {
  const userName = useInput(undefined, {
    required: true,
    maxLength: 10,
    placeholder: 'User Name and Max 10 letter'
  });
  const userAge = useInputNumber(undefined, {
    placeholder: 'User age'
  })
  return (
    <form>
      <input
        {...userName}
      />
      <input
        {...userAge}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
