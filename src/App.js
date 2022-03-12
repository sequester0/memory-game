import { useSelector } from "react-redux";
import "./App.css";
import MemoryGrid from "./components/MemoryGrid";

function App() {
  const score = useSelector((state) => state.memory.score);
  return (
    <div className="App">
      <h1 style={{ marginTop: "20px" }}>Score: {score}</h1>
      <div className="memoryGrid">
        <MemoryGrid />
      </div>
    </div>
  );
}

export default App;
