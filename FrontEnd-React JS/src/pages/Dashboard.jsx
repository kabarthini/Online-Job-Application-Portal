import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Dashboard.css';



function AdminSidebar() {
  return (
    <div>
    <div className='full229'>
         
         
      
        
   
        <input type='checkbox' id="check9"/>
        <label for="check">
        <div id='menubar9'><FaIcons.FaBars/></div>
        <div id='close9'><AiIcons.AiOutlineClose/></div>
        </label>
    
    
        <div className="sidebar9">
          <div className='img_slide9'>
       {/*<Link to='/'><img src={logo} height="38.2px" width="100px"></img></Link> */}
        <h3><Link to='/'>My App</Link></h3>
        </div>
            <ul>
              <li><Link to='/db'><span className='icon'></span>Dashboard</Link></li>
              <li><Link to="/user"><span className='icon'></span>Users</Link></li>
              <li><Link to="/app"><span className='icon'></span>Job Post</Link></li>
              <li><Link to="/jb"><span className='icon'></span>Application</Link></li>
              <li><Link to="/login"><span className='icon'></span>Logout</Link></li> 
            </ul>
          </div>
         
    </div>

  
  
  </div>
 
  )
}

export default AdminSidebar