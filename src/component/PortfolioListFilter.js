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

const PortfolioListFilter = ({toggleFilter, open}) => {
  return <div id="projects-flow" className="">
    <div className="row center row-nav-animation">
      <div className="col-sm-12 play-list-box">
        <div className="btn-play-list open">
          <span  className="portfolio-filter-btn" onClick={toggleFilter}><span>Filter Project </span> <img src="/assets/images/icon-filter.png" /> </span>
          <ul className={`dropdown-menu ${open ? 'js-open': 'js-close'}`}>
            <li>
            {filters.map(({category, items}) =>
                <ul className="list-unstyled col-sm-3 border-right" key={category}>
                  <li className="filter_heading">{category.toUpperCase()}</li>
                  {items.map((item, key) => <li key={key}><span>{item.label} <i className="fa" /></span></li>)}
                </ul>
            )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
};

export default PortfolioListFilter