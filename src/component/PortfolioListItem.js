import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageLoader from '../component/ImageLoader';

const PortfolioListItem = ({loop, data}) => {
  const { name, summery, _thumbnail, tags, endOn, _images } = data,
          src = _thumbnail && _thumbnail.url ? _thumbnail.url.replace("download/", "") : false,
          date = endOn ? new Date(endOn).toDateString(): '',
          tagNames = tags.map(tag => `#${tag.name}`);

  const id = Math.floor(Math.random() * 7) + 1;
  return <div className={`col-sm-4 project-item ${loop%3 === 1 ? 'center': ''} ${loop%3===2 ? 'end': ''} ${loop%3===0 ? 'start': ''}`}>
           <div className="project-content">
             <h3 className="project-title font-alt">{name}</h3>
             <div className="project-info"><i className="fa fa-calendar-o"/> {date}</div>
             <div className="project-info"><i className="fa fa-tags"/> {tagNames.join(", ")}</div>
             <div className="project-details">{summery}</div>
             <div className="project-thumb-wrapper">
               {_images.map((img, key)=> <img src={`${img.url.replace("download/", "")}s.jpg`} key={key} />)}
             </div>
             <NavLink to={`/project/${id}`} className="btn btn-mod">View Project</NavLink>
           </div>
        </div>
  /*return <li className="work-item mix photography">
    <NavLink to={`/project/${id}`} className="work-lightbox-link mfp-image">
      <div className="work-img">
        {/!*{ src ? <ImageLoader src={`${src}m.jpg`} placeholder="/assets/images/blank.png" defaultImage={'/assets/images/blank.png'} className="list-image"  alt={_thumbnail.title}  /> : null}*!/}
        { src ? <img src={`${src}m.jpg`}/> : null }
      </div>
      <div className="work-intro">
        <h3 className="work-title">{name}</h3>
        <div className="work-descr">
          {summery}
        </div>
      </div>
    </NavLink>
  </li>*/
};

export default PortfolioListItem