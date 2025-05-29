import React from "react";
import "./App.css";
import Example from "@/view/Example";
import { Test1 } from "@/view/Example/test1";
import Data from "@/view/Component";

function App() {
  return (
    <div className="App">
      <Example />
      <Test1 />
      <Data />
    </div>
  );
}

export default App;
