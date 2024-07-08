import React, { useState } from 'react';

const PostForm = ({ initialPost, onSave }) => {
  const [post, setPost] = useState(initialPost);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input name="title" value={post.title} onChange={handleChange} />
      </div>
      <div>
        <label>Content:</label>
        <textarea name="content" value={post.content} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;
