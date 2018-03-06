import React from 'react';
import { NavLink } from 'react-router-dom'

const PortfolioListItem = ({loop}) => {
  const id = Math.floor(Math.random() * 7) + 1;
  return <li className="work-item mix photography">
    <NavLink to={`/projects/${id}`} className="work-lightbox-link mfp-image">
      <div className="work-img">
        <img src={`/assets/images/projects-${id}.jpg`} alt="Work" />
      </div>
      <div className="work-intro">
        <h3 className="work-title">Portrait</h3>
        <div className="work-descr">
          Lightbox {id}
        </div>
      </div>
    </NavLink>
  </li>
};

export default PortfolioListItem