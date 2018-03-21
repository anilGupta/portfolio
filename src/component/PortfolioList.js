import React, { Component } from 'react';
import Masonry from 'react-masonry-component';



class PortfolioList extends Component{
  constructor(props) {
    super(props);
    this.masonry = null;
  }

  handleLayoutComplete(){
      console.log("layout completed")
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render(){
    const { children } = this.props,
            options = {
              transitionDuration: 1000
            };

    return <Masonry
              className="works-grid work-grid-3 clearfix font-alt hover-white hide-titles masonry"
              id="work-grid"
              options={options}
              disableImagesLoaded={true}
              updateOnEachImageLoad={true}
            >{children}</Masonry>
  }
}

export default PortfolioList