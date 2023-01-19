import React from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navleft">
        <span className="logo">Facebook</span>
      </div>
      <div className="navMiddle">
        <div className="searchbar">
          <SearchOutlinedIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Enter your text here"
          />
        </div>
      </div>
      <div className="navRight">right</div>
    </div>
  );
};

export default Navbar;
