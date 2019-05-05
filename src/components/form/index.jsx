import React from "react";
import "./index.css";
import { useForm } from "../../hooks";

const Form = () => {
  const [formData, setFormData] = useForm(
    {
      regNumber: "",
      funcNumber: "",
      email: "",
      password: ""
    },
    {
      regNumber: /^\d{0,6}$/,
      funcNumber: v => {
        if (/^\d{0,10}$/.test(v)) return v;
        return funcNumber;
      }
    }
  );

  const { regNumber, funcNumber, email, password } = formData;

  return (
    <form>
      <input
        value={regNumber}
        onChange={e => setFormData(e)}
        placeholder="6位数字"
        type="text"
        name="regNumber"
        required
      />
      <input
        value={funcNumber}
        onChange={e => setFormData(e)}
        placeholder="10位数字"
        type="text"
        name="funcNumber"
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
