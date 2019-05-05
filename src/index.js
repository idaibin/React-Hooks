import React, { useState } from "react";
import ReactDOM from "react-dom";
import Form from "./components/form/index.jsx";
import Timer from "./components/timer/index.jsx";

import "./styles.css";

function App () {
  return (
    <div className="App">
      <h1>Forms with React Hooks</h1>
      <Form />
      <Timer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
