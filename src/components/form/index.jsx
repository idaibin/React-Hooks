import React from "react";
import "./index.css";
import { useInput, useInputNumber, useInputInit } from '../../hooks'


const Form = () => {
  const userName = useInput('', {
    required: true,
    maxLength: 10,
    placeholder: 'User Name and Max 10 letter'
  });

  const userAge = useInputInit('', {
    placeholder: 'User age'
  })

  const numberInput = useInputNumber('', {
    placeholder: 'number'
  })
  return (
    <form>
      <input
        {...userName}
      />
      <input
        {...userAge}
      />
      <input
        {...numberInput}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
