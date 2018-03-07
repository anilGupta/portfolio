import React from 'react';

const filters = [
  {
    category : 'language', items: [
      { label: 'PHP', code: 'php'},
      { label: 'JAVASCRIPT', code: 'js'},
      { label: 'HTML5/ CSS3', code: 'html5'},
      { label: 'NODEJS', code: 'nodejs'},
      { label: 'SCSS/LESS', code: 'css'}
    ]
  },
  {
    category : 'FRAMEWORK', items: [
      { label: 'SYMFONY1.4, SYMFONY 2.X', code: 'sf'},
      { label: 'ANGULAR JS', code: 'js'},
      { label: 'LOOPBACK JS', code: 'LB'},
      { label: 'WORDPRESS', code: 'WP'},
      { label: 'OPENCART', code: 'oc'}
    ]
  },
  {
    category : 'LIBRARY', items: [
      { label: 'REACT JS', code: 'sf'},
      { label: 'KNOCKOUT JS', code: 'sf'},
      { label: 'REDUX', code: 'rx'},
      { label: 'MOBX', code: 'mobx'},
      { label: 'MV*', code: 'mv*'},
    ]
  },
  {
    category : 'MISC', items: [
      { label: 'COFFEE SCRIPT', code: 'cs'},
      { label: 'TUMBLR', code: 'tumblr'},
    ]
  }
]

const PortfolioListFilter = ({toggleFilter, open, selectedTags, filterAction}) => {
  return <div id="projects-flow" className="">
    <div className="row center row-nav-animation">
      <div>
        <div className="col-sm-12 col-md-3">
          <button className="btn btn-mod" onClick={toggleFilter}><span>Filter Project </span> <img src="/assets/images/icon-filter.png" /> </button>
        </div>
        <div className="col-sm-12 col-md">
          <div className="selectedTags">{selectedTags.map((tag, key)=>
            <span className="btn btn-mod btn-border btn-circle" key={key} onClick={filterAction.bind(null, 'remove', key)}>{tag.label} <i className="fa fa-close" /></span>
          )}</div>
        </div>
      </div>
      <div className="col-sm-12">
        <ul className={`dropdown-menu ${open ? 'js-open': 'js-close'}`}>
          <li>
            {filters.map(({category, items}) =>
              <ul className="list-unstyled col-sm-3 border-right" key={category}>
                <li className="filter_heading">{category.toUpperCase()}</li>
                {items.map((item, key) => {
                  const has = selectedTags.find(tag => tag.code == item.code) ? true: false;
                  return <li key={key} onClick={filterAction.bind(null, has ?"remove": "add", item)}><span>{item.label} {has ? <i className="fa fa-remove" /> : null}</span></li>
                })}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  </div>
};

export default PortfolioListFilter