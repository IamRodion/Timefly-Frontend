import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  const formatTimeToUTC = (date) => {
    return date.toUTCString().slice(17, 25); // Extrae solo la parte de la hora
  };

  return (
    <div>
      <p className="display-1">{formatTimeToUTC(time)}</p>
    </div>
  );
}

export default Clock;
