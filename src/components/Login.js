import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const { setIsAuth } = props;

  const navgate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログインでログイン
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navgate("/");
    });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
