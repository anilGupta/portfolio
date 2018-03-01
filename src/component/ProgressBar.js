import React from 'react';

const ProgressBar = ({title, value}) =>{
  return <div className="progress tpl-progress">
    <div className="progress-bar" role="progressbar" style={{ width: `${value}%` }}>
      {title}<span>{value}%</span>
    </div>
  </div>
};

export default ProgressBar