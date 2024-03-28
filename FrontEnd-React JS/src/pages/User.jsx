import React from 'react';
import './User.css';
import Dashboard from './Dashboard';

const UserPage = () => {
  const bookings = [
    { name: 'Kabarthini', email: 'kabarthini@gmail.com', jobsapplied: '3' },
    { name: 'Inba', email: 'inba@gmail.com', jobsapplied: '4'},
    { name: 'Nila', email: 'nila@gmail.com', jobsapplied: '6' },
    { name: 'Sam', email: 'sam@gmail.com', jobsapplied: '2'}
  ];

  return (
    <div className="user-page">
      <div className="content-container">
        <div className="admin-dashboard">
          <Dashboard />
        </div>
        
        <div className="booking-information">
        <div className='ud'>
          <h2>User Details</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Number of jobs applied</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.jobsapplied}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPage;