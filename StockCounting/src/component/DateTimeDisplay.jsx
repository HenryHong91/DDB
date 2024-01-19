import React, { useState, useEffect } from "react";

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div>
      <p>{formattedDateTime}</p>
    </div>
  );
}

export default DateTimeDisplay;
