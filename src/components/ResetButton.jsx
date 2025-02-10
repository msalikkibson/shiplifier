import React from "react";

const ResetButton = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset
    </button>
  );
};

export default ResetButton;
