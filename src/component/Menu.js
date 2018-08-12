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
        <span className={`fm-button ${open ? 'active': ''}`} onClick={this.toggleMenu}><span />Menu</span>
        <div className={`fm-wrapper  ${open ? 'active': ''}`}>
          <div className={`fm-wrapper-content ${open ? 'active': ''}`}>
            <div className={`fm-wrapper-sub  ${open ? 'js-active': ''}`}>
              <div className="fm-wrapper-sub-sub">
                <ul className="fm-menu-links local-scroll">
                  {Config.menu.map(({id, name, url}) =>
                    <li key={id} >
                      <NavLink to={url} activeClassName={'active'} >
                        {(url === '/download-cv' && !small) ? <span className="btn btn-mod btn-circle"><i className="fa fa-cloud-download"/> {name}</span>: name}
                      </NavLink>
                    </li>
                  )}
                </ul>
                <div className="fm-social-links">
                  {Config.social.map(({id, name, url}) => <NavLink to={url} target="_blank" key={id} title={name}><i className={`fa fa-${name.toLowerCase()}`} /></NavLink>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FullMenu;