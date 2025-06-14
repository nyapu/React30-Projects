import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Current time state
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-wrapper">
      <h2 className="clock-title">🕒 Live Clock</h2>
      <div className="clock-body">
        <div className="clock-face">
          <span className="clock-time">
            {currentTime.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
