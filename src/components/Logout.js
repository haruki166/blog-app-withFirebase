import { signInWithPopup, signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  const { setIsAuth } = props;

  const navgate = useNavigate();
  const logout = () => {
    //ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navgate("/login");
    });
  };
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
