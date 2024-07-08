import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PostList from '../components/PostList';

const PostsDisplay = ({ posts, setEditingPost }) => {
  const history = useHistory();

  const handleEdit = (index) => {
    setEditingPost(index);
    history.push('/edit');
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostList posts={posts} onEdit={handleEdit} />
      <Link to="/create">
        <button>Create Post</button>
      </Link>
    </div>
  );
};

export default PostsDisplay;
