import React, { useState } from "react";

function getTime() {
  let time = new Date().toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });
  return time;
}

function Time() {
  const [time, setState] = useState(getTime());
  setInterval(() => setState(getTime()), 1000);
  return (
    <div className="time">
      <h1>{time}</h1>
    </div>
  );
}

export default Time;
