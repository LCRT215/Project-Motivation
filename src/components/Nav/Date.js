import React from "react";
import "../Nav/Nav.css";
import Clock from "react-live-clock";
import "./Date.css";

function DateTime() {
  return (
    <div className="dateContainer">
      {/* DAY */}

      <Clock
        // style={}
        className="day"
        format={"dddd"}
        ticking={true}
        timezone={"US/Eastern"}
      />

      {/* DATE */}

      <Clock
        className="date"
        format={"LL"}
        ticking={true}
        timezone={"US/Eastern"}
      />

      {/* TIME */}

      <Clock
        className="time"
        format={"LT"}
        date={""}
        ticking={true}
        timezone={"US/Eastern"}
      />
    </div>
  );
}

export default DateTime;
