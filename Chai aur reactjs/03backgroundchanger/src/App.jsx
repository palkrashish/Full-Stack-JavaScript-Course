import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    > <h1 className="text-white text-center font-bold text-4xl"> Background Color Changer</h1>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-1  shadow-lg bg-white px-3 py-4 rounded-xl">
          <button
            onClick={() => setColor("blue")}
            className="outline-none py-6 px-8 mx-5 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("grey")}
            className="outline-none py-6 px-8 mx-5 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none py-6 px-8 mx-5 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none py-6 px-8 mx-5 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none py-6 px-8 mx-5 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none py-6 px-8 mx-5 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none py-6 px-8 mx-5 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none py-6 px-8 mx-5 rounded-full text-white shadow-lg "
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
