import React from 'react';

const PortfolioListItem = ({loop}) => {
  return <li className="work-item mix photography">
    <a href={`/assets/images/projects-${loop+1}.jpg`} className="work-lightbox-link mfp-image">
      <div className="work-img">
        <img src={`/assets/images/projects-${loop+1}.jpg`} alt="Work" />
      </div>
      <div className="work-intro">
        <h3 className="work-title">Portrait</h3>
        <div className="work-descr">
          Lightbox {loop + 1}
        </div>
      </div>
    </a>
  </li>
};

export default PortfolioListItem