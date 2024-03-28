import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/295/140/original/jq-initial-letter-with-crown-vector.jpg"
            style={{ width: '70px', height: '60px', borderRadius: '5px', top: '-10px' }}
          />
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><span><Link to='/'>Home</Link></span></li>
          <li><span><Link to='/about'>About</Link></span></li>
          <li><span><Link to='/contact'>Contact</Link></span></li>
          <li><span><Link to='/Login'>Login</Link></span></li>
          <li><span><Link to='/profile'>Profile</Link></span></li>
          <div className='usericon' style={{ fontSize: '20px', marginTop: '5px' }}>
            <FaUser />
          </div>
        </ul>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
}

export default App;
