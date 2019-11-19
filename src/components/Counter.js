import React, { useState, useEffect } from "react";
import "./Counter.css";
import Box from "./Box";

const Counter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const myDate = "2020-04-13";

  const giveMeTime = () => {
    const time = Date.parse(myDate) - Date.parse(new Date());
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / 1000 / 60) % 60);
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    setSeconds(seconds);
    setHours(hours);
    setMinutes(minutes);
    setDays(days);
  };

  const dataNames = ["Días", "Horas", "Minutos", "Segundos"];
  const dataTimes = [days, hours, minutes, seconds];
  const result = dataNames.map((e, i) => {
    return { name: e, value: dataTimes[i] };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      giveMeTime();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="box-container">
      {result.map((e, i) => {
        return <Box key={i} name={e.name} value={e.value} />;
      })}
    </div>
  );
};

export default Counter;
