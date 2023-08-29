import React, { useState, useEffect } from 'react';
import './css/CountDownTimer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CountDownTimer(props) {
  const { hours, minutes, seconds } = props;

  const [timeRemaining, setTimeRemaining] = useState(
    hours * 3600 + minutes * 60 + seconds
  );

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeRemaining === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const handleStartReset = () => {
    if (isRunning) {
      setIsRunning(false);
      setTimeRemaining(hours * 3600 + minutes * 60 + seconds);
    } else {
      setIsRunning(true);
    }
  };

  const formatTime = (time) => {
    const padZero = (num) => (num < 10 ? `0${num}` : num);
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  return (
    <div className={`countdown-timer ${timeRemaining === 0 && 'flashing'}`}>
      <div className={`timer-digit ${timeRemaining === 0 && 'red'}`}>
        {formatTime(timeRemaining)}
      </div>
      <button className='btn btn-primary' onClick={handleStartReset}>
        {isRunning ? 'Reset' : 'Start'}
      </button>
    </div>
  );
}
