import React from "react";
import ReactDOM from "react-dom";

import Form from "./Form.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Forms with React Hooks</h1>
      <Form />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
