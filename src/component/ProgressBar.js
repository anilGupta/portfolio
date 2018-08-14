import React from 'react';
import Helper from "../utils/helper";

const ProgressBar = ({index, title, value, animate}) => {

  const style = {
     width: animate ? `${value}%`: '',
     transitionDelay:  `${index * 50}ms `,
     transitionDuration: `${Helper.getRandomInt(1, 9, 0.2)}s`
  };

  return <div className="progress tpl-progress">
    <div className={`progress-bar ${animate ? 'animate': ''}`} role="progressbar" style={style}>
      {title}<span>{value}%</span>
    </div>
  </div>
};

export default ProgressBar