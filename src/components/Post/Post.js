import { ChatBubbleOutline, Favorite, MoreVert, ShareOutlined, ThumbUp, ThumbUpAltOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Post.scss";
import IosShareIcon from '@mui/icons-material/IosShare';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Post = ({ post }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("Users.json")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                users.filter((user) => user.id === post.userId)[0]
                  ?.profilePicture
              }
              className="PostProfileImg"
              alt=""
            />
            <span className="postUsername">
              {users.filter((user) => user.id === post.userId)[0]?.username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <IconButton>
              <MoreVert className="postVert" />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.body}</span>
          <img src={post.photo} className="postImg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <Favorite className="bottomLeftIcon" style={{color:"red"}} />
            <ThumbUp className="bottomLeftIcon" style={{color:"blue"}} />
            <span className="postLikeCount">{post.like}</span>
          </div>
          <div className="postbottomRight">
            <span className="postCommentText">
              {post.comment}
              .comments . <IosShareIcon className="bottomLeftIcon"/>
            </span>
          </div>
        </div>

        <hr className='footerHr'/>
                <div className='bottomFooter'>
                    <div className='postbottomFooterItem'>
                        <ThumbUpAltOutlined className="footerIcon"/>
                        <span className="footerText">Like</span>
                    </div>
                    <div className='postbottomFooterItem'>
                        <ChatBubbleOutline className="footerIcon"/>
                        <span className="footerText">Comment</span>
                    </div>
                    <div className='postbottomFooterItem'>
                        <ShareOutlined className="footerIcon"/>
                        <span className="footerText">Share</span>
                    </div>
                    <div className='postbottomFooterItem'>
                        <LocalMallIcon className="footerIcon"/>
                        <span className="footerText">Add To Cart</span>
                    </div>
                </div>

      </div>
    </div>
  );
};

export default Post;
