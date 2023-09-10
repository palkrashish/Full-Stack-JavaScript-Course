import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const additionNum = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const subtractionNum = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="parent">
      <h1>Counter App</h1>
      <h2>Value of counter is: {counter} </h2>
      <button className="btn" onClick={additionNum}>Increase</button>
      <button className="btn" onClick={subtractionNum}>Decrease</button>
    </div>
  );
};

export default Counter;
