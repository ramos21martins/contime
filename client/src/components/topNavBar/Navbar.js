import React from 'react'
import './navbar.css'
import{AiOutlineSetting,AiOutlineBell} from 'react-icons/ai'
import{BiSearchAlt} from 'react-icons/bi'

import photo from '../../assets/pictureprofile.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='search-box'>
            <BiSearchAlt className='icon'/>
            <input  className="text" type="text" placeholder="Search anything here"/>
        </div>
        <div className='rigth-icons'>
            <AiOutlineSetting className='icon'/>
            <AiOutlineBell className='icon'/>
            <img className='photo' src={photo}/>
        </div>
    </div>
  )
}

export default Navbar