import './App.css';
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img 
          src="https://helpful-griffin-0a0ba5.netlify.app/samosa.png" 
          className="samosa" 
          onClick={updateCount}
        />
      </div>

      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={() => setMultiplier(2)}>Buy for 10 Samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={() => setMultiplier(2)}>Buy for 100 Samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={() => setMultiplier(2)}>Buy for 1000 Samosas</button>
        </div>
      </div>
    </div>
  )

};

export default App;


