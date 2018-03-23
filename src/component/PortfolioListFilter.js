import React from 'react';
const PortfolioListFilter = ({collection, toggleFilter, open, filterTags, filterAction}) => {
  console.log(filterTags)

  return <div>
            <div className="row center row-nav-animation">
              <div className="col-sm-12 col-md-2">
                <button className="btn btn-mod" onClick={toggleFilter}><span>Filter Project </span> <img src="/assets/images/icon-filter.png" /> </button>
              </div>
              <div className="col-sm-12 col-md-10">
                <div className="selectedTags">{filterTags.map((tag, key)=>
                  <span className="btn btn-mod btn-border btn-circle" key={key} onClick={filterAction.bind(null, 'REMOVE', tag)}>{tag.name} <i className="fa fa-close" /></span>
                )}</div>
              </div>
            </div>

            <div className='raw'>
              <div className="col-sm-12 pb-10">
                <div className={`dropdown-menu ${open ? 'js-open': 'js-close'}`}>
                  {Object.keys(collection).map( category =>
                    <ul className="list-unstyled col-sm-3 border-right work-grid-gut" key={category}>
                      <li className="filter_heading">{category.toUpperCase()}</li>
                      {collection[category].map((item, key) => {
                        const has = filterTags.find(tag => tag.id == item.id) ? true: false;
                        return <li key={key} onClick={filterAction.bind(null, has ? "REMOVE": "ADD", item)}><span>{item.name.toUpperCase()} {has ? <i className="fa fa-remove" /> : null}</span></li>
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
        <div className="clearfix" />
  </div>
};

export default PortfolioListFilter