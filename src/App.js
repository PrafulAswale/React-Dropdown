import Dropdown from "./components/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const list = ["Yes", "Probably Not"];
  return (
    <div className="App">
      <header className="App-header">
        <Dropdown list={list} />
      </header>
    </div>
  );
}

export default App;
