import React from 'react';
import './Job.css';
import { FaHome } from "react-icons/fa";
import { GrCurrency } from "react-icons/gr";
import Nav from './Nav';
import {Link} from 'react-router-dom';


const JobDescription = () => {
  return (
    <div><br/><br/>
    <Nav/>
    <div className="job-container1">
    <Nav/>
      <div className="job-description">
      <div className='symbol'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3evDdnDlv2dd9C7Mfuqhx1RndafxZrYDdhsWufjxLGV9TCh-WQcc-nF1TIqkVJuiQJYc&usqp=CAU " height='70px' width="80px"/>
        </div>
        <div className='SAP'><h2>SAP Consultant</h2></div>
        <div className="company-info">
          <div className='wood'><p>Woodbridge HR Solutions</p></div>
          <div className='workfrom'><div className='home'><FaHome /></div><p>Work from home</p></div>
          <div className='money'><div className='cur'><GrCurrency /></div><p>₹80,000 - ₹145,000 monthly</p></div>
          <div className="rectangle-box">
           <div className='fixed'> <p>Fixed</p></div>
           <div className='earning'><p>Earning Potential</p></div>
           <div className='ear'>₹80,000 - ₹145,000</div>
           <div className='earn'>₹145,000</div>
          </div>
          
          <div className='fulltime'><h4>Full Time</h4></div>
          <div className='min'><h4>Min. 5 Years</h4></div>
          <div className='basic'><h4>Basic English</h4></div>
          <button className="apply-button"><Link to='/form'>Apply for Job</Link></button>
        </div>
        <div className="job-details">
          <h3>Job Description</h3>
          <p>
            Role: SAP One Source / Open Text / SAP Fieldglass configurator
            Mode: permanent Work from home
          </p>
          <h4>Requirement:</h4>
          <p>
            6-9 Years Experience
            Degree: Bachelor in Commerce / Comp Sci / MBA / MCA or equivalent degree
          </p>
          <h4>Roles and Responsibility:</h4>
          <p>
            OpenText VIM Job Description :
            Analyze, plan, design, configure and test OpenText VIM solution
            Requires sound knowledge on Document Archiving, OCR, VIM Workflows, Process Types, Exception handling and Reports, including integration with S/4
            OpenText VIM, Ariba and other cloud-based applications.
          </p>
          {/* Add other role descriptions here */}
          <h4>Benefits:</h4>
          <p>
            Permanent work from office
            Malaysia based company
          </p>
        </div>
        <div className="contact-info">
          <h3>If you are interested please contact :</h3>
          <p>Email: sharmila@wbhrsolutions.com</p>
          <p>Phone: +91 9042422915 - Sharmila</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobDescription;
