import React, { useState } from "react";
import ReactDOM from "react-dom";

import Form from "./components/form/index.jsx";
import Timer from "./components/timer/index.jsx";

import { useForm } from './hooks'

import "./styles.css";

function App () {
  const [start, setStart] = useState(false)
  const [formData, setFormData] = useForm(
    {
      second: 60
    }, {
      second: /^\d{0,3}$/
    }
  )
  const onToggle = () => {
    setStart(false)
    setTimeout(() => {
      setStart(true)
    }, 0);
  }
  return (
    <div className="App">
      <h1>Forms with React Hooks</h1>
      <Form />
      <div>
        <div>
          <input
            name="second"
            value={formData.second}
            onChange={(e) => setFormData(e)}
          />
          <div className="btn" onClick={onToggle}>
            开始倒计时
          </div>
          {start && <Timer {...formData} />}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
