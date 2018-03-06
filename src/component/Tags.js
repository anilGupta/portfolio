import React from 'react';
import { NavLink } from 'react-router-dom';

const defaultTags = ['Design', 'Portfolio', 'Digital', 'Branding', 'ThemeTheme', 'Clean', 'UI & UX', 'Love'];
const Tags = ({tags=defaultTags}) => {
  return <div className="widget">
            <h5 className="widget-title font-alt">Tags</h5>
            <div className="widget-body">
              <div className="tags">
                {tags.map((tag, key) => <NavLink to={`/projects/${tag}`}>{tag}</NavLink>)}
              </div>
            </div>
          </div>
};

export default Tags;
