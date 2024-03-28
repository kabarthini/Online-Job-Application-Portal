import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Application.css';
import Dashboard from './Dashboard';

const Application = () => {
  const [company, setCompany] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [salary, setSalary] = useState('');
  const [workMode, setWorkMode] = useState('');
  const [workTime, setWorkTime] = useState('');
  const [workShift, setWorkShift] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (company.length === 0 || jobRole.length === 0 || salary.length === 0 || workMode.length === 0 || workTime.length === 0 || workShift.length === 0) {
      alert("Please fill in all fields");
    } else {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}` // Corrected syntax for setting Authorization header
          }
        };
        const store = { company, jobRole, salary, workMode, workTime, workShift };
        await axios.post('http://localhost:8080/job/postjob', store, config); // Corrected syntax for axios post request
        navigate('/'); // Navigate to home page after successful submission
      } catch (error) {
        console.error("Error posting job:", error);
      }
    }
  };

  return (
    <div>
      <Dashboard />
      <div className='appli'>
        <h2>Post a Job</h2>
      </div>
      <form className="application-form" onSubmit={handleSubmit}>
        <label>
          Company:
          <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
        </label>
        <label>
          Job Role:
          <input type="text" name="jobRole" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
        </label>
        <label>
          Salary:
          <input type="text" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </label>
        <label>
          Work Mode:
          <input type="text" name="workMode" value={workMode} onChange={(e) => setWorkMode(e.target.value)} />
        </label>
        <label>
          Work Time:
          <input type="text" name="workTime" value={workTime} onChange={(e) => setWorkTime(e.target.value)} />
        </label>
        <label>
          Work Shift:
          <input type="text" name="workShift" value={workShift} onChange={(e) => setWorkShift(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Application;
