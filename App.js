import "./App.css";
import NestedMenu from "./components";
import menus from "./components/data";


function App() {
  return <div className="App">
    <NestedMenu menus={menus}/>
  </div>;
}

export default App;
