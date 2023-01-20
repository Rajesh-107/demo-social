import React, { useState } from "react";
import "./PostInput.scss";

const PostInput = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="post">
        <input className="shareInput" type="text" placeholder="Write a Post" onClick={() => setModalOpen(true)}></input>
        {/* <input className="shareInput" type="text" placeholder="Write a Post"/> */}
        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <div className="insidemodal">
              <h3>Create Post</h3>
              <span className="cancel" onClick={() => setModalOpen(false)}>&times;</span>
             
              </div>
              <hr/>
             
             <textarea className="textarea" placeholder="What do you want to talk about?" rows="" cols=""></textarea>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostInput;
