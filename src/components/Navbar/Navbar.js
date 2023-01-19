import React from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="navRight">
        <div className="navbarLinks">
            
        </div>
        <div className="navbarIcons">
            <div className="navbarIconItem">
                
                <span className="navbarlink"> <MarkChatUnreadOutlinedIcon/> </span>
                <span className="navbarlink"> <AccountCircleOutlinedIcon/> </span>
            <span className="navbarlink"> <NotificationsNoneOutlinedIcon/> </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
