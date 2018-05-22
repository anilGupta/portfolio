import React, { Component } from 'react';
import helper from '../utils/helper';

class FlareAnimation extends Component{

  componentWillMount(){
    this.wrapper = null;
  }

  componentDidMount(){
  }

  render() {
    const { children } = this.props;

    return (
        <div>
          <div className="track" />
        </div>
    )
  }
}

export default FlareAnimation;