import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const subValue = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
      <Header />
        <h2>Counter Application</h2>
        <h3>Value: {count} </h3>
        <button onClick={addValue}>Increase Value</button>
        <button onClick={subValue}>Decrease Value</button>
        <hr />
        <Footer />
      </div>
    </>
  );
}

export default App;
