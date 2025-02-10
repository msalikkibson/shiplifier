import React from "react";
import Box from "./Box";

const Grid = ({ boxStates, onBoxClick, GRID_SIZE }) => {
  return (
    <div className="grid">
      {Array.from({ length: GRID_SIZE }).map((_, index) => (
        <Box
          key={index}
          index={index}
          isActive={boxStates[index]}
          onClick={onBoxClick}
        />
      ))}
    </div>
  );
};

export default Grid;
