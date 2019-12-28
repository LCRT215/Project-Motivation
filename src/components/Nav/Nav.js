import React from "react";
import "../Nav/Nav.css";
import Weather from "../Weather/Weather";
import Clock from "react-live-clock";

function NavBar() {
  const myDate = new Date();
  const hrs = myDate.getHours();
  let greeting;

  if (hrs < 12) greeting = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greeting = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greeting = "Good Evening";

  return (
    <div className="nav-container">
      <p className="greeting">{greeting}</p>

      {/* DAY */}
      <Clock format={"dddd"} ticking={true} timezone={"US/Eastern"} />
      {/* DATE */}
      <Clock format={"LL"} ticking={true} timezone={"US/Eastern"} />
      {/* TIME */}
      <Clock format={"LT"} date={""} ticking={true} timezone={"US/Eastern"} />
    </div>
  );
}

export default NavBar;
