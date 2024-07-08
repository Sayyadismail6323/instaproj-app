import React from 'react';
import PostForm from '../components/PostForm';

const CreatePost = ({ onSave }) => {
  const initialPost = { title: '', content: '' };

  return (
    <div>
      <h1>Create Post</h1>
      <PostForm initialPost={initialPost} onSave={onSave} />
    </div>
  );
};

export default CreatePost;
