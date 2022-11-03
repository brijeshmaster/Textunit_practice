import React from "react";
import { useState } from "react";
import About from "./component/About";
import Nav from "./component/Nav";
import TextForm from "./component/TextForm";

const App = () => {
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor="black"
      console.log("dark")
    } else {
      setMode("light");
      document.body.style.backgroundColor="white"
      console.log("light")
    }
  };

  return (
    <div>
      <Nav title="textUtils" mode={mode} togglemode={togglemode} />
      <div className="container my-5" >
        <TextForm heading="Enter The Text To Analyze" mode={mode} togglemode={togglemode} />
      </div>
      <About />
    </div>
  );
};

export default App;
