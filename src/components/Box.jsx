import React from "react";

const Box = ({ index, isActive, onClick }) => {
  return (
    <div
      className={`box ${isActive ? "active" : "inactive"}`}
      onClick={() => onClick(index)}
    />
  );
};

export default Box;
