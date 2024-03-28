import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const formHolder = async (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      alert("Enter email and password");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/authenticate", { username, password });
      const { token, role } = response.data;
      localStorage.setItem("token", token);

      if (role === "ADMIN") {
        navigate("/db");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Incorrect Username and Password.");
    }
  };

  return (
    <div>
      <div className="loginContainer">
        <div className="loginForm">
          <FaUser className="user-icon" />
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <FaEnvelope className="input-icon" />
            <input id="email" className="LoginInput" type="email" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-field">
            <FaLock className="input-icon" />
            <input id="password" className="LoginInput" type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn" onClick={formHolder}>Sign In</button>
          <p className="register-link">Don't have an account? <Link to='/signup'>Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
