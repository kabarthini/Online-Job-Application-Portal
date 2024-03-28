import React from 'react';
import Nav from './Nav';
import './Profile.css';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <br/><br/><br/><br/><br/>
      <Nav/>
      <div className='rectangle234'>
        <div className='rectangle23'>
          <div className='icon'>
            <FaUser size={90} /> {/* Adjust the size as needed */}
          </div>
        </div>
        <div className='name'>
          <h2>Kabarthini</h2>
        </div>
        <div className='em'>
          <p>kabarthini@gmail.com</p>
        </div>
        <div className='no'>
          <p>Jobs applied:3</p>
        </div>
      </div>
      <div className='applied'>
        <h2>Jobs Applied</h2>
      </div>
      <div className='card'>
        <div className='card-content'>
          <h2>Microsoft</h2>
          <h3>Software Development Engineer</h3>
          <p className="job-info">
            <div className='salary'><strong>Salary:</strong> $40,000<br/></div>
            <div className='mode'><strong>Work Mode:</strong> Offline<br/></div>
            <div className='time'><strong>Work Time:</strong> Full Time<br/></div>
            <div className='shift'><strong>Work Shift:</strong> Day</div>
          </p>
         <Link to='/edit'> <button>Edit</button> </Link>
        </div>
      </div>
      <div className='card1'>
        <div className='card-content1'>
          <h2>Zoho</h2>
          <h3>Web Developer</h3>
          <p className="job-info1">
            <div className='salary1'><strong>Salary:</strong> $50,000<br/></div>
            <div className='mode1'><strong>Work Mode:</strong> online<br/></div>
            <div className='time1'><strong>Work Time:</strong> Full Time<br/></div>
            <div className='shift1'><strong>Work Shift:</strong> Day</div>
          </p>
          <Link to='/edit'><button>Edit</button></Link>
        </div>
      </div>

      <div className='card2'>
        <div className='card-content2'>
          <h2>TCS</h2>
          <h3>SAP Consultant</h3>
          <p className="job-info2">
            <div className='salary2'><strong>Salary:</strong> $35,000<br/></div>
            <div className='mode2'><strong>Work Mode:</strong> Offline<br/></div>
            <div className='time2'><strong>Work Time:</strong> Full Time<br/></div>
            <div className='shift2'><strong>Work Shift:</strong> Night</div>
          </p>
          <Link to='/edit'><button>Edit</button> </Link>
        </div>
      </div>
    </div>
  );
}
