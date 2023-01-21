import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div>
      <button className="responsive-button" {...props}>
        Follow
      </button>
    </div>
  );
};

export default Button;
