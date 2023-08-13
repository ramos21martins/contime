import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span>Contime</span>
      </div>
      <div className='menu-options'>
        <div className='option'>
           <Link to="/">Home</Link>
        </div>
        <div className='option'>
           <Link to="/">Home</Link>
        </div>
        <div className='option'>
           <Link to="/">Home</Link>
        </div>
      </div>
      <div className='logout'>
        logout
      </div>
    </div>
  );
};

export default Sidebar;
