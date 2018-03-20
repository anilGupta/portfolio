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
    this.masonry ? this.masonry.on('layoutComplete', this.handleLayoutComplete): null;
  }

  componentWillUnmount(){
    this.masonry.off('layoutComplete', this.handleLayoutComplete);
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
              ref={el => el ? this.masonry = el: null}
            >{children}</Masonry>
  }
}

export default PortfolioList