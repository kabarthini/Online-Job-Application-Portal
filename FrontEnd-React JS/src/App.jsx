import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Job from './pages/Job';
import Form from './pages/Form';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import User from './pages/User';
import Jobpost from './pages/Jobpost';
import Dboard from './pages/Dboard';
import Application from './pages/Application';
import Edituser from './pages/Edituser';
import Jobsavailable from './pages/Jobsavailable';

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/job" element={<Job/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/dash" element={<Dashboard/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/jb" element={<Jobpost/>}/>
    <Route path="/db" element={<Dboard/>}/>
    <Route path="/app" element={<Application/>}/>
    <Route path="/edit" element={<Edituser/>}/>
    <Route path="/jobsavail" element={<Jobsavailable/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

