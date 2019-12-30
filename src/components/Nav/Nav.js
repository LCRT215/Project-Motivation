import React from "react";
import "../Nav/Nav.css";
import Weather from "../Weather/Weather";
import Clock from "react-live-clock";
import Date from "./Date";

function NavBar() {
  var myDate = new Date();
  let hrs = myDate.getHours();
  let greeting;

  if (hrs < 12) greeting = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greeting = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greeting = "Good Evening";

  return (
    <div className="nav-container">
      <p className="greeting">{greeting}</p>
      <Date />
    </div>
  );
}

export default NavBar;
