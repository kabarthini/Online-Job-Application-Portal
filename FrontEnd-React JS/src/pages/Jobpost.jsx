import React, { useState } from 'react';
import Dashboard from './Dashboard';
import './Jobpost.css';

export default function Jobpost() {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(true);
  const [showCard3, setShowCard3] = useState(true);

  const handleDelete1 = () => {
    setShowCard1(false);
  };

  const handleDelete2 = () => {
    setShowCard2(false);
  };

  const handleDelete3 = () => {
    setShowCard3(false);
  };

  const handlePost = () => {
    console.log('Post button clicked');
  };

  return (
    <div>
      <Dashboard />
      <div className='jobpost'>
        <h2>Application</h2>
      </div>
      {showCard1 && (
        <div className='card22'>
          <div className='card-content22'>
            <h2>Microsoft</h2>
            <h3>Software Development Engineer</h3>
            <div className="job-info22">
              <div className='salary22'><strong>Salary:</strong> $40,000</div>
              <div className='mode22'><strong>Work Mode:</strong> Offline</div>
              <div className='time22'><strong>Work Time:</strong> Full Time</div>
              <div className='shift22'><strong>Work Shift:</strong> Day</div>
            </div>
            <div className="buttons">
              <button onClick={handleDelete1} className="deleteButton">Delete</button>
              <button onClick={handlePost}>Post</button>
            </div>
          </div>
        </div>
      )}

      {showCard2 && (
        <div className='card229' style={{ top: showCard1 ? '-245px' : '100px' }}>
          <div className='card-content229'>
            <h2>Zoho</h2>
            <h3>Web Developer</h3>
            <div className="job-info229">
              <div className='salary229'><strong>Salary:</strong> $50,000</div>
              <div className='mode229'><strong>Work Mode:</strong> Offline</div>
              <div className='time229'><strong>Work Time:</strong> Full Time</div>
              <div className='shift229'><strong>Work Shift:</strong> Day</div>
            </div>
            <div className="buttons9">
              <button onClick={handleDelete2} className="deleteButton9">Delete</button>
              <button onClick={handlePost}>Post</button>
            </div>
          </div>
        </div>
      )}

      {showCard3 && (
        <div className='card2291' style={{ top: (showCard1 && showCard2) ? '-245px' : (showCard1 || showCard2) ? '100px' : '445px' }}>
          <div className='card-content2291'>
            <h2>TCS</h2>
            <h3>SAP Consultant</h3>
            <div className="job-info2291">
              <div className='salary2291'><strong>Salary:</strong> $30,000</div>
              <div className='mode2291'><strong>Work Mode:</strong> Offline</div>
              <div className='time2291'><strong>Work Time:</strong> Full Time</div>
              <div className='shift2291'><strong>Work Shift:</strong> Night</div>
            </div>
            <div className="buttons91">
              <button onClick={handleDelete3} className="deleteButton91">Delete</button>
              <button onClick={handlePost}>Post</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
