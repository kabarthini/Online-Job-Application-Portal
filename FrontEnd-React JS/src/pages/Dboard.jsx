import React from 'react';
import { BiNotepad } from "react-icons/bi";
import { FaLaptop } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'; // Import necessary components from recharts
import './Dboard.css';
import Dashboard from './Dashboard';

export default function Jobpost() {
  // Sample data for the bar graph
  const data = [
    { name: 'Microsoft', usersApplied: 75 },
    { name: 'Zoho', usersApplied: 86 },
    { name: 'TCS', usersApplied: 45 },
    // Add more data as needed
  ];

  return (
    <div>
      <Dashboard />
      <div className='da'><h2>Dashboard</h2></div>
      <div className="interviews-card">
        <div className='hea'><h2>Interviews Scheduled</h2></div>
        <div className='is' style={{ fontSize: '30px' }}>
          <FaLaptop />
        </div>
        <div className='cou'><h2>75</h2></div>
      </div>

      <div className="interviews-card2">
        <div className='hea2'><h2>Application sorted</h2></div>
        <div className='as' style={{ fontSize: '30px' }}>
          <BiNotepad />
        </div>
        <div className='cou2'><h2>86</h2></div>
      </div>

      <div className="interviews-card3">
        <div className='hea3'><h2>Profile viewed</h2></div>
        <div className='pv' style={{ fontSize: '30px' }}>
          <FaUser />
        </div>
        <div className='cou3'><h2>45</h2></div>
      </div>

      {/* Render the bar graph */}
      <div className="bar-graph-container">
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
        
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="usersApplied" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}
