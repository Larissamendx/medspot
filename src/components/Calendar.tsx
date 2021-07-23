import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import styles from "../styles/components/Calendar.module.css";

function Calendario() {
  const [value, onChange] = useState(new Date());
  const [day, setDay] = useState(value);

  useEffect(() => {
    setDay(value);
    console.log(day);
  });

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        showNeighboringMonth={false}
      />
    </div>
  );
}

export default Calendario;
