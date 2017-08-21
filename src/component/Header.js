import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
import Config from '../constants/Config';

const Header = () => {
  return (
    <header>
      <nav className="main-nav mobile-on">
        <div className="full-wrapper relative clearfix">
          <div className="nav-logo-wrap local-scroll">
            <NavLink to="/" className="logo">
              <img src="/assets/images/logo.png" alt="home page" />
            </NavLink>
          </div>
          <div className="mobile-nav">
            <i className="fa fa-bars" />
          </div>
          <div className="inner-nav desktop-nav">
            <ul className="clearlist">
              {Config.menu.map(({id, name, url}) => <li key={id} ><NavLink to={url} activeClassName={'active'} className="mn-has-sub" >{name}</NavLink></li>)}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
};
export default Header;