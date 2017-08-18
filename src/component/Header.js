import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'
import Config from '../constants/Config';

const Header = () => {
  return (
    <header>
        <ul className="nav">
          {Config.menu.map(({id, name, url}) => <li key={id} ><NavLink to={url} activeClassName={'active'} >{name}</NavLink></li>)}
        </ul>
    </header>
  )
};
export default Header;