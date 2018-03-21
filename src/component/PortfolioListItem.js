import React from 'react';
import { NavLink } from 'react-router-dom'

const PortfolioListItem = ({loop, data}) => {
  const { name, summery, _thumbnail } = data

  const id = Math.floor(Math.random() * 7) + 1;
  return <li className="work-item mix photography">
    <NavLink to={`/project/${id}`} className="work-lightbox-link mfp-image">
      <div className="work-img">
        { _thumbnail ? <img src={_thumbnail.url} alt={_thumbnail.title} /> : null }
      </div>
      <div className="work-intro">
        <h3 className="work-title">{name}</h3>
        <div className="work-descr">
          {summery}
        </div>
      </div>
    </NavLink>
  </li>
};

export default PortfolioListItem