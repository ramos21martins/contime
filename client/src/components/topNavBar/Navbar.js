import React from 'react'
import './navbar.css'
import{AiOutlineSetting,AiOutlineBell} from 'react-icons/ai'
import{BiSearchAlt} from 'react-icons/bi'

import photo from '../../assets/pictureprofile.jpeg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='search-box'>
            Ghost Receipts
        </div>
        <div className='rigth-icons'>


            <img className='photo' src={photo}/>
        </div>
    </div>
  )
}

export default Navbar