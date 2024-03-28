// AboutUs.jsx
import React from 'react';
import './About.css';
import Nav from './Nav';


const AboutUs = () => {
  return (
    <div>
    <br/><br/><br/><br/><br/>
    <Nav/>
    <div>
   
    <div className="about-us-container">
    
      <div className='about'><h1>About Us</h1></div>
      <p>
      Welcome to our job application portal! At Job Quest, we're dedicated to connecting 
      talented individuals with exciting career opportunities. 
      Our mission is to facilitate the perfect match between employers and job seekers, 
      ensuring mutual satisfaction and success.With our user-friendly platform, job seekers 
      can explore a wide range of job listings, filter by industry, location, or job type, and 
      apply with ease. We understand the importance 
      of finding the right fit for both parties, which is why we 
      strive to provide a seamless and efficient job search experience.
      </p>
      <p>
      Our mission is to bridge the gap between employers and job seekers, 
      facilitating meaningful connections that drive success for both parties.
       With innovative features and advanced search functionalities, 
      we make it easier than ever for employers to find the perfect 
      candidates and for job seekers to land their ideal jobs.
      </p>
      <p>
      Backed by a team of dedicated professionals, Job Quest is more than just a 
      job portal – it's a trusted partner in your career journey. Whether
       you're a recent graduate embarking on your 
      professional path or a seasoned professional seeking new challenges, 
      Job Quest is here to support you every step of the way.
      </p>
    </div>
    </div>
    </div>
  );
};

export default AboutUs;
