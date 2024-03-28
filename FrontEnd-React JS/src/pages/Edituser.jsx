import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Edituser.css';
import Nav from './Nav';

export default function Edituser() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      phonenumber: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission, e.g., send data to server or perform other actions
      console.log(formData);
      // Reset form data after submission if needed
      setFormData({
        username: '',
        email: '',
        phonenumber: '',
      });
    };
  
    return (
      <div><br/><br/><br/><br/><br/>
      <Nav/>
        <div className='edu'>
          <h2>Edit Details</h2>
        </div>
        <form className="application-form4" onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Phonenumber:
            <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
          </label>
          
          <Link to='/'><button type="submit">Edit</button></Link>
        </form>
      </div>
    );
  }
