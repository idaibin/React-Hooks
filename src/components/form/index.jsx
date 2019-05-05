import React from "react";
import "./index.css";
import { useForm } from '../../hooks'


const Form = () => {
  const [formData, setFormData] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }, {
    firstName: /^\d{0,6}$/,
    lastName: v =>  v > 100 ? 100 : v
  });

  const { firstName, lastName, email, password } = formData;

  return (
    <form>
      <input
        value={firstName}
        onChange={e => setFormData(e)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <input
        value={lastName}
        onChange={e => setFormData(e)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      />
      <input
        value={email}
        onChange={e => setFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setFormData(e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
