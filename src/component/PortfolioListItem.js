import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageLoader from '../component/ImageLoader';

const PortfolioListItem = ({loop, data}) => {
  const { name, summery, _thumbnail } = data,
          src = _thumbnail && _thumbnail.url ? _thumbnail.url.replace("download/", "") : false;
          console.log(loop, src)

  const id = Math.floor(Math.random() * 7) + 1;
  return <li className="work-item mix photography">
    <NavLink to={`/project/${id}`} className="work-lightbox-link mfp-image">
      <div className="work-img">
        { src ? <ImageLoader src={`${src}m.jpg`} placeholder="/assets/images/blank.png" defaultImage={'/assets/images/blank.png'} className="list-image"  alt={_thumbnail.title}  /> : null}
        {/*{ src ? <img src={`${src}m.jpg`}/> : null }*/}
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