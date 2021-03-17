import React, { useState } from "react";

const Time = () => {
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  // get curr days
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thur";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  var n = weekday[date.getDay()];
  setInterval(() => {
    setTime(strTime);
    setDay(n);
  }, 1000);
  return (
    <div className="time">
      <span> {time}</span>
      <small style={{ margin: "auto 10px" }}>{day}</small>
    </div>
  );
};

export default Time;
