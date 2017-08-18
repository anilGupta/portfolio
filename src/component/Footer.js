import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
import Config from '../constants/Config';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
        <p>Copyright © {year} Anil Gupta, All rights reserved.</p>
        <ul className="social-links">
          {Config.social.map(({id, name, url}) => <li key={id} ><a href={url} target="_blank" >{name}</a></li>)}
        </ul>
    </footer>
  )
};
export default Footer;