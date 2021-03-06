import React from "react";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator/QuoteGenerator";
// import Weather from "./components/Weather/Weather";
import Nav from "./components/Nav/Nav";
import TodoList from "./components/TodoList/TodoList";

// Things to add to this project:
// Make into a home page replacer?
// - Make api with own quotes
// - Weather api
// - Link to favorite sites?
// - Add Auth so user can add their own motivational quotes?? (firebase or Oauth?)
// - Add feedback component
// - Login option?

function App() {
  return (
    <div className="App">
      <Nav />
      <QuoteGenerator />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
