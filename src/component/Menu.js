import React, { Component } from 'react';
import { NavLink }  from 'react-router-dom';
import Config from '../constants/Config';

class FullMenu extends Component{

  constructor(props) {
    super(props);
  }

  render(){
    const { openMenu, toggleMenu, small } = this.props;
    console.log('open menu', openMenu);

    return (
      <div>
        <span className={`fm-button ${openMenu ? 'active': ''}`} onClick={toggleMenu}><span />Menu</span>
        <div className={`fm-wrapper  ${openMenu ? 'active': ''}`}>
          <div className={`fm-wrapper-content ${openMenu ? 'active': ''}`}>
            <div className={`fm-wrapper-sub  ${openMenu ? 'js-active': ''}`}>
              <div className="fm-wrapper-sub-sub">
                <ul className="fm-menu-links local-scroll">
                  {Config.menu.map(({id, name, url}) =>
                    <li key={id} >
                      <NavLink to={url} activeClassName={'active'} exact={true} >
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