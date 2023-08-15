import logo from "./logo.svg";
import "./App.css";
import EventFunctional from "./components/EventFunctional";
import EventClass from "./components/EventClass";

function App() {
  return (
    <div className="App">
      <EventFunctional />
      <EventClass />
    </div>
  );
}

export default App;
