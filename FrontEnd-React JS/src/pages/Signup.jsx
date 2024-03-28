import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios'; 

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [role, setRole] = useState('');

  const formHolder = async (e) => {
    e.preventDefault();
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (username.length===0 || emailid.length===0 || password.length===0 || mobileno.length===0 || role.length===0) {
      alert("Please fill in all fields");
      return;
    }
    
    else if (!regex.test(emailid)) {
      alert("Please enter a valid email address");
      return;
    }
    
    else if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }
    else
    {

    try {
      await axios.post("http://localhost:8080/auth/register", { username, emailid, password, mobileno, role });
     
        navigate('/');
     
    } 
    catch (error) {
      console.error("Error:", error);
      alert("An error occurred during signup. Please try again later.");
    }
  }
  }

  return (
    <div className="loginContainer13">
      <form onSubmit={formHolder}>
        <div className="loginForm13">
          <FaUser className="user-icon13" />
          <h2 className="title13">Sign up</h2>
          <div className="input-field13">
            <FaUser className="input-icon13" />
            <input id="username" className="LoginInput13" type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-field13">
            <FaEnvelope className="input-icon13" />
            <input id="email" className="LoginInput13" type="email" placeholder='Enter Email' value={emailid} onChange={(e) => setEmailid(e.target.value)} />
          </div>
          <div className="input-field13">
            <FaLock className="input-icon13" />
            <input id="password" className="LoginInput13" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-field13">
            <FaPhone className="input-icon13 phone" />
            <input id="mobileno" className="LoginInput13" type="text" placeholder='Enter Mobile No' value={mobileno} onChange={(e) => setMobileno(e.target.value)} />
          </div>
          <div className="input-field13">
            <select id="role" className="LoginInput13" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </select>
          </div>
          <button className="btn13" type='submit'><Link to='/Login'>Sign Up</Link></button>
          <p className="register-link13">Already have an account? <Link to='/Login'>Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
