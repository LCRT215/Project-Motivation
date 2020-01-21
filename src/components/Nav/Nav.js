import React from "react";
import "../Nav/Nav.css";
import DateTime from "./Date";

// import Weather from "../Weather/Weather";
// import Clock from "react-live-clock";

function NavBar() {
  var date = new Date();
  var hrs = date.getHours();
  var greeting;

  if (hrs < 12) greeting = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greeting = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greeting = "Good Evening";

  return (
    <div className="nav-container">
      <p className="navGreeting">{greeting}</p>
      <div className="dateTime">
        <DateTime />
      </div>
    </div>
  );
}

export default NavBar;
