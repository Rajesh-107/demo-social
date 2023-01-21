import React from "react";
import Button from "../utils/Button";
import "./RightSidebarHome.scss";

const RightSidebarHome = () => {
  return (
   <div>
     <div className="rightbarHome">
      <div className="addFeed">
        <li className="sidebarFriend">
          <img
            className="sidebarcompanyImg"
            src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg"
            alt=""
          />
          <span className="friendname">
          Honda Bangladesh
             <br /> <p className="connections">Company . Automotion</p>{" "}
             <Button  text="Follow"/>
          </span>
          
        </li>
        
      </div>
    </div>
     <div className="rightbarHome">
      <div className="addFeed">
        <li className="sidebarFriend">
          <img
            className="sidebarcompanyImg"
            src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg"
            alt=""
          />
           <span className="friendname">
          Honda Bangladesh
             <br /> <p className="connections">Company . Automotion</p>{" "}
             <Button  text="Follow"/>
          </span>
        </li>
       
      </div>
    </div>
     <div className="rightbarHome">
      <div className="addFeed">
        <li className="sidebarFriend">
          <img
            className="sidebarcompanyImg"
            src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg"
            alt=""
          />
          <span className="friendname">
          Honda Bangladesh
             <br /> <p className="connections">Company . Automotion</p>{" "}
             <Button  text="Follow"/>
          </span>
        </li>
        
      </div>
    </div>
   </div>
  );
};

export default RightSidebarHome;
