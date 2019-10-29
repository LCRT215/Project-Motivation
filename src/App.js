import React from "react";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator/QuoteGenerator";
import Weather from "./components/Weather/Weather";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <QuoteGenerator />
    </div>
  );
}

export default App;
