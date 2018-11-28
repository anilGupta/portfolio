import React from 'react';
import { NavLink } from 'react-router-dom';

const Tags = ({collection =[]}) => {
  return <div className="widget">
            <h5 className="widget-title font-alt">Tags</h5>
            <div className="widget-body">
              <div className="tags">
                {collection.map(({ name, id, code}, key) => <NavLink to={`/projects/${code}`} key={key}>{name}</NavLink>)}
              </div>
            </div>
          </div>
};

export default Tags;
