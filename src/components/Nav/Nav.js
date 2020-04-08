import React from "react";
import "../Nav/Nav.css";
import DateTime from "./Date";
import Morning from "../Nav/svg/001-window.svg";
import Night from "../Nav/svg/002-curtain.svg";
import Day from "../Nav/svg/003-window-1.svg";

// import Weather from "../Weather/Weather";
// import Clock from "react-live-clock";

function NavBar() {
  var date = new Date();
  var hrs = date.getHours();
  var greeting;
  var img;

  if (hrs < 12) {
    greeting = "Good Morning";
    img = Morning;
  } else if (hrs >= 12 && hrs <= 17) {
    greeting = "Good Afternoon";
    img = Day;
  } else if (hrs >= 17 && hrs <= 24) {
    greeting = "Good Evening";
    img = Night;
  }
  document.write(img);

  return (
    <div className="navContainer">
      <img className="navImg" src={img} />
      <p className="navGreeting">{greeting}</p>
      <div className="dateTime">
        <DateTime />
      </div>
    </div>
  );
}

export default NavBar;
