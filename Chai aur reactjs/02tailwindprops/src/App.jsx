import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h3 className="">Learning Tailwind - CSS</h3>
      <Card userName = 'Ashish' btn = 'Clicked' />
      <Card userName= 'Rahul' />
    </>
  );
}

export default App;
