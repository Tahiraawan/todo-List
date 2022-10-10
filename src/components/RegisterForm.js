//create a form
//Input fields for  Name
//Input fields for  Email
//input field password
//..button (submit)
//als0 create a state for  name,email and pass
//======================
import React from "react";
import {
  UserOutlined,
  MailOutlined,
  FormOutlined,LockOutlined
  
} from "@ant-design/icons";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { RegisterUser } from "../api/authApi";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("string");
    try {
      const response = await RegisterUser({
        username: name,
        email, // email:email
        password, //
      });
      if (response.ok) {
        toast.success("successfully Login");
        navigate("/login");
      }
    } catch (error) {
      toast.error("error.message");
    }
  };

  return (
    <div className="form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
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
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <MailOutlined className="input-icon" />
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

        <button className="signup-btn" type="submit">
          <FormOutlined className="btn-icon" />
          <span>SignUp</span>
        </button>
        <div className="login-link">
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
