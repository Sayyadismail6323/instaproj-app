import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsDisplay from './pages/PostsDisplay';
import CreatePost from './pages/CreatePost';
import PostForm from './components/PostForm';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const savePost = (post) => {
    if (editingPost !== null) {
      const updatedPosts = posts.map((p, index) =>
        index === editingPost ? post : p
      );
      setPosts(updatedPosts);
      setEditingPost(null);
    } else {
      setPosts([...posts, post]);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PostsDisplay posts={posts} setEditingPost={setEditingPost} />
        </Route>
        <Route path="/create">
          <CreatePost onSave={savePost} />
        </Route>
        <Route path="/edit">
          {editingPost !== null && (
            <PostForm initialPost={posts[editingPost]} onSave={savePost} />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
