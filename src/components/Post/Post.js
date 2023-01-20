import { Favorite, MoreVert, ThumbUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Post.scss";

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
                <MoreVert className="postVert"/>
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.body}</span>
            <img src={post.photo} className="postImg" alt=""/>
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <Favorite className="bottomLeftIcon"/>
                <ThumbUp className="bottomLeftIcon"/>
                <span className="postLikeCount">{post.like}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
