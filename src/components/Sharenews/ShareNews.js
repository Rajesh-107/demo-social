import React from "react";
import './ShareNews.scss';

const ShareNews = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfile" src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" alt=""/>
            <input type="text" placeholder="Start a Post" className="shareInput" />
        </div>
        <div className="shareBottom">Bottom</div>
      </div>
    </div>
  );
};

export default ShareNews;
