import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
import Config from '../constants/Config';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="page-section bg-gray-lighter footer">
        <div className="container">
          <div className="footer-social-links mb-20 mb-xs-40">
            {Config.social.map(({id, name, url}) => <NavLink to={url} target="_blank" key={id} title={name}><i className={`fa fa-${name.toLowerCase()}`} /></NavLink>)}
          </div>
          <div className="footer-text">
            <div className="footer-copy font-alt">
              <a href="http://themeforest.net/user/theme-guru/portfolio" target="_blank">&copy; {year} Anil Gupta</a>.
            </div>
            <div className="footer-made">__just a tech__ </div>
          </div>
        </div>

    </footer>
  )
};
export default Footer;