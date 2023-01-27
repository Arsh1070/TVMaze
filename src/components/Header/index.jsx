import React from "react";
import "./customHeader.css";

const CustomHeader = () => {
  return (
    <div className="CustomHeader">
      <h3
        className="logo"
        role="presentation"
        /*  onClick={() => {
          history.push("/");
          window.location.reload();
        }} */
      >
        TVMaze
      </h3>
    </div>
  );
};

export default CustomHeader;
