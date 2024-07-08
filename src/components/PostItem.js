import React from 'react';

const PostItem = ({ post, onEdit }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default PostItem;
