// Hooks used
import { useState, useRef } from "react";

function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const intervalRef = useRef(null);


  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    //clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval(). If the parameter provided does not identify a previously established action, this method does nothing.
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  //clearInterval freezes the time
  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h2>Time passed: {secondsPassed.toFixed(3)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

export default Stopwatch;
