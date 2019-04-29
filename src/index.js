import React from "react";
import ReactDOM from "react-dom";

import Form from "./components/form/index.jsx";
import useCountDown from "./hooks/count-down/index.jsx";
import "./styles.css";

function App() {
  const Countdown = useCountDown(5);
  return (
    <div className="App">
      <h1>Forms with React Hooks</h1>
      <Form />
      {Countdown}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
