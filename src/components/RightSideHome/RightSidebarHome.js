import React, { useEffect, useState } from "react";
import OnlineFriends from "../OnlineFriends/OnlineFriends";
import Button from "../utils/Button";
import "./RightSidebarHome.scss";

const RightSidebarHome = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("OnlineFriends.json")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <div className="rightbarHome">
        <div className="addFeed">
          <li className="sidebarFriend">
            <img
              className="sidebarcompanyImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFTTdIQnuscQvpNh9SLORe-fONyyqsQyswQ&usqp=CAU"
              alt=""
            />
            <span className="friendname">
              Honda Bangladesh
              <br /> <p className="connections">Company . Automotion</p>{" "}
              <button class="bg-gray-500 rounded-full text-white font-bold text-sm py-1 px-2">Follow</button>
            </span>
          </li>
        </div>
      </div>
      <div className="rightbarHome">
        <div className="addFeed">
          <li className="sidebarFriend">
            <img
              className="sidebarcompanyImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFTTdIQnuscQvpNh9SLORe-fONyyqsQyswQ&usqp=CAU"
              alt=""
            />
            <span className="friendname">
              Honda Bangladesh
              <br /> <p className="connections">Company . Automotion</p>{" "}
              <button class="bg-gray-500 rounded-full text-white font-bold text-sm py-1 px-2">Follow</button>
            </span>
          </li>
        </div>
      </div>
      <div className="rightbarHome">
        <div className="addFeed">
          <li className="sidebarFriend">
            <img
              className="sidebarcompanyImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFTTdIQnuscQvpNh9SLORe-fONyyqsQyswQ&usqp=CAU"
              alt=""
            />
            <span className="friendname">
              Honda Bangladesh
              <br /> <p className="connections">Company . Automotion</p>{" "}
              <button class="bg-gray-500 rounded-full text-white font-bold text-sm py-1 px-2">Follow</button>
            </span>
          </li>
        </div>
      </div>

      <span className="rightbarTitle">Online Friends</span>
      <hr className="footerHr"/>
      <ul className="rightbarFriendList">
        {users.map((user) => (
          <OnlineFriends key={user} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default RightSidebarHome;
