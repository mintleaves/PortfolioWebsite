import { useEffect, useState } from "react";
import "./aboutus.scss";

const ClockNumber = ({ value }) => {
  return (
    <div className="clock-number" style={{ "--i": value }}>
      <b>{value}</b>
    </div>
  );
};

const Clock = () => {
  //   const items = Array.from({ length: 12 }, (_, i) => i + 1);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hh = hours * 30;
  const mm = minutes * 6;
  const ss = seconds * 6;

  const formattedHours = formatTime(hours % 12 || 12);
  const formattedMinutes = formatTime(minutes);
  const formattedSeconds = formatTime(seconds);
  const ampm = hours >= 12 ? "PM" : "AM";

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  return (
    <div className="clock">
      <div className="border-circle"></div>
      <div className="border-circle"></div>
      <div className="border-circle"></div>

      <div
        className="inner-circle inner-circle-1"
        id="sec"
        style={{ transform: `rotateZ(${ss}deg)` }}
      >
        <div></div>
      </div>
      <div
        className="inner-circle inner-circle-2"
        id="min"
        style={{ transform: `rotateZ(${mm}deg)` }}
      >
        <div></div>
      </div>
      <div
        className="inner-circle inner-circle-3"
        id="hrs"
        style={{ transform: `rotateZ(${hh + mm / 12}deg)` }}
      >
        <div></div>
      </div>

      {/* Clock Numbers */}
      {Array.from({ length: 12 }, (_, i) => i + 1).map((item) => (
        <div key={item} className="clock-number" style={{ "--i": item }}>
          <b>{item}</b>
        </div>
      ))}

      {/* Digital Clock */}
      <div className="digital-time-wrap">
        <div id="digital-time">
          <div id="hours">{formattedHours}</div>
          <div id="minuts">{formattedMinutes}</div>
          <div id="seconds">{formattedSeconds}</div>
          <div id="ampm">{ampm}</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
