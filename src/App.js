import Dropdown from "./components/Dropdown";

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
