import React from "react";
import "../Nav/Nav.css";
import Clock from "react-live-clock";

function DateTime() {
  return (
    <div className="dateContainer">
      {/* DAY */}
      <span className="dateDay">
        <Clock
          // style={}
          format={"dddd"}
          ticking={true}
          timezone={"US/Eastern"}
        />
      </span>
      {/* DATE */}
      <a className="dateDate">
        <Clock format={"LL"} ticking={true} timezone={"US/Eastern"} />
      </a>
      {/* TIME */}
      <a className="dateTime">
        <Clock format={"LT"} date={""} ticking={true} timezone={"US/Eastern"} />
      </a>
    </div>
  );
}

export default DateTime;
