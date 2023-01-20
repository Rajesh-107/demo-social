import React from "react";
import PostInput from "../InputModal/PostInput";
import "./ShareNews.scss";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";

const ShareNews = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfile"
            src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg"
            alt=""
          />
          <PostInput />
        </div>
        <hr className="sharehr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <SmartDisplayOutlinedIcon style={{color:"grey"}} className="shareIcon" />
              <span className="shareOptionsText">Live</span>
            </div>
            <div className="shareOption">
              <ImageSearchOutlinedIcon style={{color:"grey"}} className="shareIcon" />
              <span className="shareOptionsText">Add Photo</span>
            </div>
            <div className="shareOption">
              <WorkOutlinedIcon style={{color:"grey"}} className="shareIcon" />
              <span className="shareOptionsText">Post Job</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareNews;
