import React from "react";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator/QuoteGenerator";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <div className="App">
      <h1> HOME</h1>
      <QuoteGenerator />
      <Weather />
    </div>
  );
}

export default App;
