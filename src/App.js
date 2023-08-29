import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import CountdownTimer from './components/CountDownTimer';
import SumComponent from './components/SumComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  const countdownTimerRef = useRef(null);

  //   const startCountdown = () => {
  //     if (!running) {
  //       setRunning(true);
  //       if (countdownTimerRef.current) {
  //         countdownTimerRef.current.startCountdown(hours, minutes, seconds);
  //       }
  //     }
  //   };

  const stopCountdown = () => {
    if (running && countdownTimerRef.current) {
      countdownTimerRef.current.stopCountdown();
    }
    setRunning(false);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='container'>
          <h1 className='text-center my-5'>Countdown Timer Application</h1>
          <div className='form-group row justify-content-center text-center mb-3'>
            <div className='col-sm-1'>
              <label htmlFor='hours'>Hours:</label>
            </div>
            <div className='col-sm-2 d-flex'>
              <input
                type='number'
                id='hours'
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
                className='form-control'
                style={{ width: '50px' }}
              />
            </div>
            <div className='col-sm-1'>
              <label htmlFor='minutes'>Minutes:</label>
            </div>
            <div className='col-sm-2 d-flex'>
              <input
                type='number'
                id='minutes'
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value))}
                className='form-control'
                style={{ width: '50px' }}
              />
            </div>
            <div className='col-sm-1'>
              <label htmlFor='seconds'>Seconds:</label>
            </div>
            <div className='col-sm-2 d-flex'>
              <input
                type='number'
                id='seconds'
                value={seconds}
                onChange={(e) => setSeconds(parseInt(e.target.value))}
                className='form-control'
                style={{ width: '50px' }}
              />
            </div>
          </div>
          <div className='countdown-timer-container mb-4'>
            <CountdownTimer
              ref={countdownTimerRef}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              onCountdownComplete={stopCountdown}
            />
          </div>
          <div className='assignment-container bg-dark text-left p-3'>
            <h4>Assignment 2</h4>
            <p>Sum Component</p>
            Value: <SumComponent />
          </div>
          <div className='assignment-container bg-grey text-left p-3'>
            <h4>Assignment 3</h4>
            <p>Hover Component</p>
            <SumComponent />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
