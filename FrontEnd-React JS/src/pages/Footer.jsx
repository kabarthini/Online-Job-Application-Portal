import React from 'react';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'; 
import jqSymbol from '../assets/images/logoo.jpg';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={jqSymbol} alt="JQ Symbol" className="jq-symbol" style={{ borderRadius: '10px', marginTop: '30px' }} width="90" height="90" />
          <h3>Follow us on social media</h3>
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div className="footer-section">
          
        </div>
      </div>
     <div className='line'><hr/></div>
      <div className="footer-bottom">
        <div className="footer-links" style={{ color: 'white' }}>
         
        </div>
       <div className='copy'> <p>© 2024 Job Quest. All rights reserved.</p></div>
      </div>
      <div className='rectangle34'>
     
      <div className='apply'>
      <h2>Apply on the go</h2>
      <p>Get realtime job updates on our app</p>
      </div>
      <div className='goog'>
      <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" height="80px" width="200px"></img>
      </div>
      <div className='qr'>
      <img src="https://storage.googleapis.com/mumbai_apnatime_prod/apna-home/app-qr.png" height="100px" width="100px"></img>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
