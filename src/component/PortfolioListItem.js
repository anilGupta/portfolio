import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageLoader from '../component/ImageLoader';
import FlareAnimation from '../component/FlareAnimation';
import FaceButton from '../component/FadeButton';

const options =  {
  type: 'triangle',
  style: 'stroke',
  size: 4,
  color: '#1a1a1a',
  duration: 600,
  easing: [ 0.2, 1, 0.7, 1 ],
  oscillationCoefficient: 5,
  particlesAmountCoefficient: 2,
  direction: 'left'
};

const PortfolioListItem = ({loop, data}) => {
  const { name, summery, _thumbnail, tags, endOn, _images } = data,
          src = _thumbnail && _thumbnail.url ? _thumbnail.url.replace("download/", "") : false,
          date = endOn ? new Date(endOn).toDateString(): '',
          tagNames = tags.map(tag => `#${tag.name}`),
          images = _images.concat().filter(img => img.url);


  const id = Math.floor(Math.random() * 7) + 1;
  return <div className={`col-sm-4 project-item ${loop%3 === 1 ? 'center': ''} ${loop%3===2 ? 'end': ''} ${loop%3===0 ? 'start': ''}`}>
           <FlareAnimation  all zIndex={1} >
             <div className="project-content">
               <h3 className="project-title font-alt">{name}</h3>
               <div className="project-info"><i className="fa fa-calendar-o"/> {date}</div>
               <div className="project-info"><i className="fa fa-tags"/> {tagNames.join(", ")}</div>
               <div className="project-details">{summery}</div>
               <div className="project-thumb-wrapper">
                 {images.splice(0, 7).map((img, key) => <img src={`${img.url.replace("download/", "")}s.jpg`} key={key} />)}
                 {images.length ? <span className="more-tile"> + {images.length} more </span> : null }
               </div>
               <FaceButton to={`/project/${data.id}`} options={options} >
                 <div className="btn btn-mod">View Project</div>
               </FaceButton>
             </div>
           </FlareAnimation>
        </div>
};

export default PortfolioListItem