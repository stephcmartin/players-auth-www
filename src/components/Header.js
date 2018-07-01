import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';

// This will be a class based component

class Header extends Component {
  render (){
    return(
      <div>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>

      <Link to="/signout">Sign Out</Link>
      <Link to="/roster">Roster</Link>
      </div>
    )
  }
}

export default Header
