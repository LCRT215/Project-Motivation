import React from "react";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator/QuoteGenerator";
import Weather from "./components/Weather/Weather";
import Nav from "./components/Nav/Nav";

// Things to add to this project:
// - Time and date api
// - Weather api
// - Link to favorite sites?
// - Add memes and videos that make me laugh lol
// - Make api with own quotes? (later update)
function App() {
  return (
    <div className="App">
      <Nav />
      <QuoteGenerator />
    </div>
  );
}

export default App;
