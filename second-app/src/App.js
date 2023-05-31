import React, { useEffect, useRef, useState } from 'react';
import useWorddGame from './pages/useWordGame';

import './App.css';

function App() {
  const  {
    handleChange, 
    startClock, 
    textBoxRef, 
    timeRemaining,
     wordCount, 
     text, 
     isTimeRunning
    } = useWorddGame(5)

  return (
    <div>
    <br />
    <h1>How fast do you type?</h1>
    <textarea
    ref={textBoxRef}
       onChange={handleChange}
         value={text}
         disabled={!isTimeRunning}
    />
    <h4>Time remaining: {timeRemaining}</h4>
    <button onClick={startClock}
      disabled={isTimeRunning}
    >
      Start
    </button>

    <h1>Word count: {wordCount}</h1>

    </div>
  );
}

export default App;
