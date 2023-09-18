import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import logo from '../../assets/logo.png'
import {AiOutlineFileAdd} from 'react-icons/ai'


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
        <img  src="http://pt-intranet.corp.pri:81/assets/layouts/layout-mc/img-mc/McDonalds_logo-03.png" alt='logo'/>
      </div>
      <div className='menu-bar'>
        <div className='menu'>
          <ul className='menu-links'>
            <li className='nav-link'>
              <Link to="/"  className='link' style={linkStyle}>
                <AiOutlineFileAdd className='icon'/>
                <span className='text'>Inserir TC's</span>
              </Link>
            </li>
            <li className='nav-link'>
              <Link to="/calander" className='link' style={linkStyle}>
                <AiOutlineFileAdd className='icon'/>
                <span className='text'>Carregar BOP's</span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
