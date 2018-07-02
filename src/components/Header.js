import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './HeaderStyle.css';

// This will be a class based component

class Header extends Component {

  renderLinks(){
    if (this.props.authenticated){
      return(
      <div className="header">
        <Link to="/signout">Sign Out</Link>
        <Link to="/roster">Roster</Link>
        </div>
      );
    } else {
      return(
      <div className="header">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
      )
    }
  }

  render (){
    return(
      <div className="header">
      <Link to="/">Home</Link>
      {this.renderLinks()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
