import React from "react";
import "./Menubar.scss";

const Menubar = ({ Icon, text }) => {
  return (
    <div className="menubar">
      {Icon}

      <span className="menubarText">{text}</span>
    </div>
  );
};

export default Menubar;
