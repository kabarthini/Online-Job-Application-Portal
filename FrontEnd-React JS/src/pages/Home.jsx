import React from 'react';
import './Home.css';
import Nav from "./Nav";
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const navigateToJobs = () => {
    navigate('/jobsavail');
  };

  return (
    <div className='full2'>
      <Nav/>
      <div className='in2'><p><b>INDIA’S #1 JOB PLATFORM</b></p></div>
      <div className='head2'><h2>Job Quest: Your job search ends here</h2></div>
      <div className='dis2'>Discover 50 lakh+ career opportunities</div>
      <div className="button-container2">
        <button className="search-button2" onClick={navigateToJobs}>Find Jobs</button>
      </div>
      <div className="popular-searches2"><b>Popular</b><br/><b>Searches on</b><br/><b>Job Quest</b></div>
      <div className="rectangle2">
        <div className='trending2'>TRENDING AT #1</div>
        <div className='freshers2'>Jobs for Freshers</div>
      </div>
      <div className='rectangle22'>
        <div className='trending22'>TRENDING AT #2</div>
        <div className='wfh2'>Work from home Jobs</div>
      </div>
      <div className='rectangle32'>
        <div className='trending32'>TRENDING AT #3</div>
        <div className='parttime2'>Part time Jobs</div>
      </div>
      <div className='rectangle42'>
        <div className='trending42'>TRENDING AT #4</div>
        <div className='womenjobs2'>Jobs for Women</div>
      </div>
      <div className='rectangle52'>
        <div className='trending52'>TRENDING AT #5</div>
        <div className='internationaljobs2'>International Jobs</div>
      </div>
      <div className='jobopenings2'>
        <h2>Job Openings in Top Companies</h2>
      </div>
      <div className='rectangle62'>
        <div className='bajaj12'><b>Bajaj Allianz Life Insurance</b></div>
        <div className='bajaj22'>Provider of Life insurance <br/>and financial services.</div>
      </div>
      <div className='rectangle72'>
        <div className='paytm12'><b>Paytm Service Pvt. Ltd.</b></div>
        <div className='paytm22'>Digital payment and e-commerce <br/>facilitator.</div>
      </div>
      <div className='rectangle82'>
        <div className='zomato12'><b>Zomato</b></div>
        <div className='zomato22'>Online food delivery market place.</div>
      </div>
      <div className='rectangle92'>
        <div className='jobquest2'>Job Quest for Employers</div>
        <div className='wanttohire2'><b>Want to hire?</b></div>
        <div className='bestcan2'>Find the best candidate from 5 crore+ active job seekers!</div>
      </div>
      <div className='top'>
        <h2>Top Companies</h2>
      </div>
      <div className='microsoft'>
        <img src="https://images.pexels.com/photos/9683980/pexels-photo-9683980.jpeg?auto=compress&cs=tinysrgb&w=600" height="300px" width="300px" alt="Microsoft"/>
      </div>
      <div className='amazon'>
        <img src="https://i.pinimg.com/236x/15/c2/1b/15c21bddb69f87acaea8a6e30e8e7f1e.jpg" height="300px" width="300px" alt="Amazon"/>
      </div>
      <div className='zoho'>
        <img src="https://i.pinimg.com/236x/76/5b/d6/765bd63eea3305736e38a851d445aa0f.jpg" height="300px" width="300px" alt="Zoho"/>
      </div>
      <div className='go'>
        <img src="https://i.pinimg.com/236x/92/f2/d5/92f2d549250958a3b7c5452f0c95ce1d.jpg" height="300px" width="300px" alt="GO"/>
      </div>
      <div className='benz'>
        <img src="https://i.pinimg.com/236x/54/cc/9e/54cc9e71fa961a744e12620a02ab9960.jpg" height="300px" width="300px" alt="Benz"/>
      </div>
      <Footer/>
    </div>
  );
}
