import React from "react";
import { useAuth } from "../context/AuthContext";
import MenuBar from "../Bar/MenuBar";
import LoginInputField from "../Components/Login/LoginInputField";

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    //api 호출해서 데이터 있는지 확인 -> 있으면
    //로그인함: login();
    login();
  };

  return (
    <div>
      <MenuBar />
      <h1>This is login page</h1>
      <button onClick={handleLogin}>Login</button>
      <LoginInputField />
    </div>
  );
};

export default LoginPage;
