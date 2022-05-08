import React from "react";

export const Input: React.FC = () => {
  const inputId = React.useId();

  return (
    <>
      <label htmlFor={inputId}>Input</label>
      <input id={inputId} type="text" />
    </>
  );
};
