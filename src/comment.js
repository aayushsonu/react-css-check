import React from "react";

const CommentContainer = ({
  name = "Rahul gupta",
  comment = "This is a great post",
}) => {
  return (
    <div className="flex">
      <div className="img-container">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="random user"
        />
      </div>
      <div className="info-container">
        <p className="name">
          {name.slice(0,20)}
          <span className="date"> 2 months ago</span>
        </p>

        <p className="comment">{comment.slice(0,40)}</p>
      </div>
    </div>
  );
};

export default CommentContainer;
