import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

class PortfolioList extends Component{
  constructor(props) {
    super(props);

  }

  render(){
    const { children } = this.props;
    return <Masonry className="works-grid work-grid-3 clearfix font-alt hover-white hide-titles masonry" id="work-grid">{children}</Masonry>
  }
}

export default PortfolioList