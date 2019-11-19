import React from "react";

import "./Box.css";

const Box = ({ name, value }) => {
  return (
    <div className="container">
      <span style={{ color: "black", fontSize: "5em", padding: "5%" }}>
        {" "}
        {value}
      </span>
      <span style={{ color: "#B1B1B2" }}> {name}</span>
    </div>
  );
};

export default Box;
