import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import logo from '../../assets/logo.png'
import {BsCalendar3} from 'react-icons/bs'
import {CiUser} from 'react-icons/ci'
import {PiUsersThreeDuotone} from 'react-icons/pi'

const Sidebar = () => {

  const linkStyle = {
    textDecoration: 'none',
    display:'flex',
    alignItems:'center',
    borderRadius:'10px',
    height:'100%',

     // Remove text decoration
    /* You can add more styles here, like color, hover effects, etc. */
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img  src={logo} alt='logo'/>
      </div>
      <div className='menu-bar'>
        <div className='menu'>
          <ul className='menu-links'>
            <li className='nav-link'>
              <Link to="/"  className='link' style={linkStyle}>
                <PiUsersThreeDuotone className='icon'/>
                <span className='text'>Employees</span>
              </Link>
            </li>
            <li className='nav-link'>
              <Link to="/calander" className='link' style={linkStyle}>
                <BsCalendar3 className='icon'/>
                <span className='text'>Calendars</span>
              </Link>
            </li>
            <li className='nav-link'>
              <Link to="/" className='link' style={linkStyle}>
                <CiUser className='icon'/>
                <span className='text'> Profile</span>
              </Link>
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
