import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        
          <div className="center">
              <Link className='link' to="/">BLOGGY</Link>
          </div>
          <div className="right">
            <div className="item">
              <Link className='link' to="/">Home</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">About</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">Contact</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">Write</Link>
            </div>
            <div className="item">
              <Link className='link' to="/">Write</Link>
            </div>
            <div className="icons">
                <SearchIcon/>
               
                
                
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar