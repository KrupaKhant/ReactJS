import React, { useState } from 'react';
import './App.css';
import Props from './Props.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Props title="Props Component" description="This is for demo of the usestate." />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>Decrement
        </button>
      </div>
          count is {count}

    </>
  );
}

export default App;
