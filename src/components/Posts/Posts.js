import React from "react";

const Posts = (props) => {
  const { id, title, body } = props.posts;

  return (
    <div>
      <p>PostID:{id}</p>
      <p>{title}</p>
      <p>{body}</p>
      <hr />
    </div>
  );
};

export default Posts;
