import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import "./CreatePost.css";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = (props) => {
  const { isAuth } = props;

  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();
  const navgate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    setTitle("");
    setPostText("");
    navgate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navgate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h1>記事を投稿する</h1>
        <div className="inputPost">
          <div>タイトル</div>
          <input
            type="text"
            value={title}
            placeholder="タイトルを記入"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea
            placeholder="投稿内容を記入"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button className="postButton" onClick={createPost}>
          投稿する
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
