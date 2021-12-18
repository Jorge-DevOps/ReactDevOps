import React from "react";
import '../../styles/pages/Login.sass'
import logo from '../../images/DevOpstools.png'; // with import

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <img src={logo} alt="" className="login-container-img" />
        <p className="login-container-label">Username</p>
        <input type="text" className="login-container-input"/>
        <p className="login-container-label">Password</p>
        < input type="password"  className="login-container-input"/>
        <button class='login-container-button'>Login</button>
        
      </div>
    </div>
  );
};

export { Login };
