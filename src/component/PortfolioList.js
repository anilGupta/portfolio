import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

class PortfolioList extends Component{
  constructor(props) {
    super(props);
    this.masonry = null;
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render(){
    const { children } = this.props,
            options = {
              transitionDuration: 1000,
            };
    return <Masonry  id="work-grid" options={options} className="works-grid work-grid-4 work-grid-gut clearfix font-alt hover-white hide-titles masonry" >{children}</Masonry>
  }
}

export default PortfolioList