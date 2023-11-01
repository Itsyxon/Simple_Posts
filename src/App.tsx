import React, { useState } from "react";
import "./App.css";
import { Form } from "react-router-dom";
import MainForm from "./components/MainForm";
import Post from "./model/model";
import PostList from "./components/PostList";

const App = () => {
  const [title, setTitle] = useState<string>('') // Заголовок поста
  const [note, setNote] = useState<string>('') // Описание поста
  const [posts, setPosts] = useState<Post[]>([]) // Массив постов

  const addPost = (event: React.FormEvent) => { // Добавление поста
    event.preventDefault()
    if (title && note) {
      setPosts([...posts, { id: Date.now(), title: title, post: note }])
    }
    setTitle("")
    setNote("")
  }

  return (
    <div className="App">
      <h1 className="App__logo">Форма отправки записей:</h1>
      <MainForm note={note} setNote={setNote} title={title} setTitle={setTitle} addPost={addPost} />
      <PostList posts={posts} setPosts={setPosts} />
    </div>

  );
};

export default App;
