import React, { useState } from 'react';
import './Form.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobRole: '',
    dob: '',
    skills: '',
    address: '',
    city: '',
    pincode: '',
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const isEmpty = Object.values(formData).some((value) => value === '' || value === null);
    if (isEmpty) {
      window.alert('Please fill in all fields.');
      return;
    }

    console.log(formData);
    // You can add your form submission logic here

    // Display success message in a dialog box
    window.alert('Submitted successfully!');
  };

  return (
    <div>
      <br/><br/><br/><br/><br/>
      <Nav/>
      <div className="form-container">
        <div className='job'><h2>Job Application Form</h2></div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="jobRole">Job Role</label>
            <input type="text" id="jobRole" name="jobRole" value={formData.jobRole} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="cv">Upload CV</label>
            <input type="file" id="cv" name="cv" onChange={handleFileChange} />
          </div>
          <div className='bty'><button type="submit"><Link to='/'>Submit</Link></button></div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
