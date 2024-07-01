import React from "react";
import LoginComponent from "../components/login/Login";
import Navbar from "../components/navbar/navbar";

const LoginPage: React.FC = () => {
  return (
    <div className="relative">
      <Navbar/>
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
