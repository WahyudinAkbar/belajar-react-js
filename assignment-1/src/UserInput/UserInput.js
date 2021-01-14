import React from "react";

const userInput = (props) => {
  const style = {
    margin: "10px 15px",
    padding: "10px 15px",
    border: "2px solid #ccc",
  };
  return (
    <input
      style={style}
      type="text"
      onChange={props.changed}
      value={props.username}
    />
  );
};

export default userInput;
