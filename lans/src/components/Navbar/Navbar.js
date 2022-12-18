import React from 'react'
import { useContext } from "react";
import { Context } from '../../context/Context'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import './Navbar.scss'

const Navbar = () => {
  const { user, dispatch } = useContext(Context);

const handleLogout=()=>{
  dispatch({type:"LOGOUT"});
}

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
              <Link className='link' to="/" onClick={handleLogout}>{user && "LOGOUT"}Log</Link>
            </div>
            
            
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <>
            <div className="item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </div>
            </>
        )}
            
            <div className="icons">
                <SearchIcon/>
               
                
                
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar