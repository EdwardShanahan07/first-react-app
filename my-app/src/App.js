import logo from "./logo.svg";
import "./App.css";
import StateFullGreeting from "./components/StateFullGreeting";

function App() {
  return (
    <div className="App">
      <StateFullGreeting greeting={"Hello"} name={"Edward"} />
    </div>
  );
}

export default App;
