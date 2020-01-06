import React from "react";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator/QuoteGenerator";
import Weather from "./components/Weather/Weather";
import Nav from "./components/Nav/Nav";

// Things to add to this project:
// - Add loader
// - Weather api
// - Add memes and videos that make me laugh lol
// - Link to favorite sites?
// - Make api with own quotes? (later update)
// - Add Auth so user can add their own motivational quotes (firebase or Oauth?)
function App() {
  return (
    <div className="App">
      <Nav />
      <QuoteGenerator />
    </div>
  );
}

export default App;
