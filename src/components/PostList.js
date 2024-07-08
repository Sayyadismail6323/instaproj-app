import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, onEdit }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} onEdit={() => onEdit(index)} />
      ))}
    </div>
  );
};

export default PostList;
