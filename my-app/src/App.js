import logo from "./logo.svg";
import "./App.css";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps
        greeting={"Hello"}
        name={"Edward"}
        age={28}
      />
    </div>
  );
}

export default App;
