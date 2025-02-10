import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import ResetButton from "./components/ResetButton";

const App = () => {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const GRID_SIZE = 9;
  const [boxStates, setBoxStates] = useState(Array(GRID_SIZE).fill(false));

  const handleBoxClick = (index) => {
    if (!boxStates[index]) {
      const newStates = [...boxStates];
      newStates[index] = true;
      setBoxStates(newStates);
      setClickedBoxes((prev) => [...prev, index]);
    }
  };

  const handleReset = () => {
    let resetIndex = [...clickedBoxes];
    setClickedBoxes([]);
    resetIndex.reverse().forEach((index, i) => {
      setTimeout(() => {
        setBoxStates((prevState) => {
          const newStates = [...prevState];
          newStates[index] = false;
          return newStates;
        });
      }, i * 300);
    });
  };

  return (
    <div className="app-container">
      <h1 className="header">Front-End Grid Assessment</h1>
      <Grid
        boxStates={boxStates}
        onBoxClick={handleBoxClick}
        GRID_SIZE={GRID_SIZE}
      />
      <ResetButton onReset={handleReset} />
    </div>
  );
};

export default App;
