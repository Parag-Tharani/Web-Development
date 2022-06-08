import React from 'react';
import './App.css';

function App() {

const [counter , setCounter] = React.useState(0);

const HandleCount = (value) => {
  setCounter(counter + value)
}

const DoubleCount = () => {
  setCounter(counter*2)
}

  return (
    <div className="App" id="container">
      <h1>Counter:</h1>
      { counter%2 == 0 ? <h1 style={{color: "rgb(73, 172, 73)"}}> { counter } </h1>: <h1 style={{color:"rgb(235, 89, 89)"}}> { counter } </h1>}
      <div>
      <button onClick={() => HandleCount(1) }>Increment</button>
      <button onClick={DoubleCount}>Make it Double</button>
      <button onClick={() => HandleCount(-1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App