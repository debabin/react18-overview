import React from "react";

export const Batching: React.FC = () => {
  const [firstCount, setFirstCount] = React.useState(0);
  const [secondCount, setSecondCount] = React.useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setFirstCount(firstCount + 1);
      setSecondCount(secondCount + 1);
    }, 0);
  };

  console.count("rerender ♻");

  return (
    <div>
      <button onClick={handleClick}>rerender</button>
      <br />
      <div>firstCount - {firstCount}</div>
      <div>secondCount - {secondCount}</div>
    </div>
  );
};
