import logo from "./logo.svg";
import "./App.css";
import ConditionalRenderFunctional from "./components/ConditionalRenderFunctional";
import ConditionalRenderClass from "./components/ConditionalRenderClass";
function App() {
  return (
    <div className="App">
      <ConditionalRenderClass />
    </div>
  );
}

export default App;
