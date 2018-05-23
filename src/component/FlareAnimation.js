import React, { Component } from 'react';
import Helper from '../utils/helper';

class FlareAnimation extends Component{

  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  getGradientBackground(color){
    const initialColor = Helper.hexToRgb(color, 0),
          finalColor = Helper.hexToRgb(color, 1);
    return `linear-gradient(to right, ${initialColor} 0%, ${finalColor} 75%, ${finalColor} 100%)`
  }

  render() {
    const { children, horizontal=true, reverse=false, color, dark } = this.props,
            useColor = color ? color : dark ? 'black': 'white',
            style= {
              background: this.getGradientBackground(useColor),
              animation: `${reverse ? 'flare-reverse': 'flare'} 4s 0s infinite`,
            };
    return (
        <div className="flare-wrapper">
          {children}
          <div className={`flare-track ${horizontal ? 'flare-track-horizontal': 'flare-track-vertical'}`}>
            <div className="flare flare-top" style={style} />
          </div>
        </div>
    )
  }
}

export default FlareAnimation;