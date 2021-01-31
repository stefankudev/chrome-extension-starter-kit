import React from "react";
import logo from "./brum_js.svg";
import "./App.css";

function logHelloWorld() {
  console.log("Hello World!");
}


function App() {
  return (
    <div className="App">
      <main className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Great! You've made it this far
          <span role="img" aria-label="sunglasses emoji">
            😎
          </span>
        </p>
        <button onClick={logHelloWorld}>Console.log "Hello World!"</button>
      </main>
    </div>
  );
}

export default App;
