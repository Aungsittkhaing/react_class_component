import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";

const App = () => {
  const END_POINT = "http://localhost:3000/posts";
  const [posts, setPost] = useState([]);

  //add new post
  const addNewPost = async (post) => {
    await fetch(END_POINT, {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        desc: post.desc,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    setPost([post, ...posts]);
    console.log("New Post", post);
  };

  //delete post
  const deletePostHandler = async (id) => {
    // console.log("Delete ID", id);
    await fetch(END_POINT + "/" + id, {
      method: "DELETE",
    });
    setPost(posts.filter((post) => post.id != id));
  };
  //update post
  const updatePostHandler = async (updatePost) => {
    await fetch(END_POINT + "/" + updatePost.id, {
      method: "PATCH",
      body: JSON.stringify(updatePost),
      headers: {
        "content-type": "application/json",
      },
    });
    setPost(
      posts.map((post) => (post.id === updatePost.id ? updatePost : post))
    );
  };

  //show from localstorage

  // useEffect(() => {
  //   let data = localStorage.getItem(END_POINT);
  //   if (data) setPost(JSON.parse(data));
  // }, []);

  //save at localstorage

  // useEffect(() => {
  //   localStorage.setItem(END_POINT, JSON.stringify(posts));
  // }, [posts]);

  //for using json server with useEffect
  useEffect(() => {
    async function getData() {
      let posts = await (await fetch(END_POINT)).json();
      setPost(posts);
    }
    getData();
  }, []);

  return (
    <div className="container">
      <h2 className="text-info text-center my-2">Posts</h2>
      <Routes>
        <Route
          path="/"
          element={<Post posts={posts} removePost={deletePostHandler} />}
        />
        <Route path="/add" element={<AddPost addNewPost={addNewPost} />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route
          path="/post/edit/:id"
          element={<EditPost updatePost={updatePostHandler} />}
        />
      </Routes>
    </div>
  );
};

export default App;
