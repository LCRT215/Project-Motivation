import React from "react";
import "../Nav/Nav.css";
import Clock from "react-live-clock";

function Date() {
  return (
    <div className="date-container">
      {/* DAY */}
      <Clock format={"dddd"} ticking={true} timezone={"US/Eastern"} />
      {/* DATE */}
      <Clock format={"LL"} ticking={true} timezone={"US/Eastern"} />
      {/* TIME */}
      <Clock format={"LT"} date={""} ticking={true} timezone={"US/Eastern"} />
    </div>
  );
}

export default Date;
