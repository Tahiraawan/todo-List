//create a form
//Input fields for  Email
//input field password
//..button (submit)
//als0 create a state for email and pass
//======================
import React from "react";

import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../api/authApi";
import { useDispatch } from "react-redux";
import { loginUser as loginUserAction } from "../store/userSlice";
import { Link } from "react-router-dom";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await LoginUser({
        username: name, // email:email
        password, //
      });
      if (response.ok) {
        const { message, data } = await response.json();
        toast.success(message);
        dispatch(
          loginUserAction({
            userName: data.user_name,
            userId: data.user_id,
          })
        );
        navigate("/");
      } else {
        toast.error("invalid");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>logo</h1>
        <div className="welcome-text">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login</p>
        </div>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <UserOutlined className="input-icon" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LockOutlined className="input-icon" />
        </div>
        <button className="login-btn" type="submit">
          <LoginOutlined className="btn-icon" />
          <span>Login</span>
        </button>
        <div className="signup-link">
          {" "}
          <span>Don't have an account yet? </span>
          <Link to="/register">Create Account</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
