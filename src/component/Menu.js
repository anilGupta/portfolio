import React from 'react';
import { NavLink }  from 'react-router-dom';
import Config from '../constants/Config';

const FullMenu = () => {
  return <div className="fm-wrapper" id="fullscreen-menu">
    <div className="fm-wrapper-sub">
      <div className="fm-wrapper-sub-sub">
        <ul className="fm-menu-links local-scroll">
          <li><NavLink to="/" className="active">About</NavLink></li>
          <li><NavLink to="/projects">Project</NavLink></li>
          <li><NavLink to="/contacts">Contacts</NavLink></li>
          <li><NavLink to="/downloads">Downloads</NavLink></li>
        </ul>
        <div className="fm-social-links">
          <a href="#" target="_blank"><i className="fa fa-facebook" /></a>
          <a href="#" target="_blank"><i className="fa fa-twitter" /></a>
          <a href="#" target="_blank"><i className="fa fa-pinterest" /></a>
        </div>
      </div>
    </div>

  </div>
}

export default FullMenu;