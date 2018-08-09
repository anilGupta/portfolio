import React, { Component } from 'react';
import { NavLink }  from 'react-router-dom';
import Config from '../constants/Config';

class FullMenu extends Component{

  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  state = {
     open: false
  };

  toggleMenu(){
     this.setState({
        open : !this.state.open
     })
  }

  render(){
    const { open, small }= this.state;
    return (
      <div>
        <a href="#" className={`fm-button ${open ? 'active': ''}`} onClick={this.toggleMenu}><span />Menu</a>
        <div className="fm-wrapper" id="fullscreen-menu">
          <div className="fm-wrapper-sub">
            <div className="fm-wrapper-sub-sub">
              <ul className="fm-menu-links local-scroll">
                {Config.menu.map(({id, name, url}) =>
                  <li key={id} >
                    <NavLink to={url} activeClassName={'active'} className="mn-has-sub" >
                      {(url === '/download-cv' && !small) ? <span className="btn btn-mod btn-circle"><i className="fa fa-cloud-download"/> {name}</span>: name}
                    </NavLink>
                  </li>
                )}
              </ul>
              <div className="fm-social-links">
                <a href="#" target="_blank"><i className="fa fa-facebook" /></a>
                <a href="#" target="_blank"><i className="fa fa-twitter" /></a>
                <a href="#" target="_blank"><i className="fa fa-pinterest" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FullMenu;