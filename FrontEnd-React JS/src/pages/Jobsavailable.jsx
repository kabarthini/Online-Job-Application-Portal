import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom instead of useHistory
import Nav from './Nav';
import './Jobsavailable.css';

export default function Jobsavailable() {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);
  const [showCard3, setShowCard3] = useState(true);

  const navigate = useNavigate(); // Initialize useNavigate

  const handlePost = () => {
    // Logic to handle posting the job
    // Assuming navigation logic goes here
    navigate('/job'); // Navigate to '/job' route
  };

  return (
    <div>
      <br/><br/><br/><br/><br/>
      <Nav/>
      <div>
        {showCard1 && (
          <div className='card220'>
            <div className='card-content220'>
              <h2>Microsoft</h2>
              <h3>SAP Consultant</h3>
              <div className="job-info220">
                <div className='salary220'><strong>Salary:</strong> $80,000</div>
                <div className='mode220'><strong>Work Mode:</strong> Offline</div>
                <div className='time220'><strong>Work Time:</strong> Full Time</div>
                <div className='shift220'><strong>Work Shift:</strong> Day</div>
              </div>
              <div className='buttons220'>
                <button onClick={handlePost}>Open</button>
              </div>
            </div>
          </div>
        )}
        {showCard2 && (
          <div className='card2295' style={{ top: showCard1 ? '-245px' : '-500px' }}>
            <div className='card-content2295'>
              <h2>Zoho</h2>
              <h3>Web Developer</h3>
              <div className="job-info2295">
                <div className='salary2295'><strong>Salary:</strong> $50,000</div>
                <div className='mode2295'><strong>Work Mode:</strong> Offline</div>
                <div className='time2295'><strong>Work Time:</strong> Full Time</div>
                <div className='shift2295'><strong>Work Shift:</strong> Day</div>
              </div>
              <div className='buttons2295'>
                <button>Open</button>
              </div>
            </div>
          </div>
        )}
        {showCard3 && (
          <div className='card22913' style={{ top: (showCard1 && showCard2) ? '-245px' : (showCard1 || showCard2) ? '100px' : '445px' }}>
            <div className='card-content22913'>
              <h2>TCS</h2>
              <h3>Software Development Engineer</h3>
              <div className="job-info22913">
                <div className='salary22913'><strong>Salary:</strong> $30,000</div>
                <div className='mode22913'><strong>Work Mode:</strong> Offline</div>
                <div className='time22913'><strong>Work Time:</strong> Full Time</div>
                <div className='shift22913'><strong>Work Shift:</strong> Night</div>
              </div>
              <div className='buttons22913'>
                <button>Open</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
