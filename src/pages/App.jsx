import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import Calculator from "./answers/Calculator";
import TwoSum from "./answers/TwoSum";

function App() {
  return (
    <div className="App">
      <div className="text-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="card">
          <Calculator />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="card">
          <TwoSum />
        </div>
      </div>
    </div>
  );
}

export default App;
