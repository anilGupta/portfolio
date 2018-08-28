import React, { Component } from 'react';
import Helper from '../utils/helper';

const Corners = ['top', 'left', 'bottom', 'right'],
      CornersReverse = ['top', 'right', 'bottom', 'left'];
class FlareAnimation extends Component{

  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }

  getGradientBackground(color, corner, reverse=false){
    const initialColor = Helper.hexToRgb(color, 0),
          finalColor = Helper.hexToRgb(color, 1),
          presets =  reverse ? CornersReverse: Corners,
          currentIndex = presets.findIndex(i => i === corner),
          direction = currentIndex === presets.length - 1  ? presets[0] :  presets[currentIndex + 1];
          //console.log(currentIndex, presets.length -1, `linear-gradient(to ${direction}, ${initialColor} 0%, ${finalColor} 75%, ${finalColor} 100%)`);

    return reverse
              ? `linear-gradient(to ${direction}, ${finalColor} 0%, ${finalColor} 75%, ${initialColor} 100%)`
              : `linear-gradient(to ${direction}, ${initialColor} 0%, ${finalColor} 75%, ${finalColor} 100%)`
  }

  render() {
    const { children, horizontal=true, reverse=false, color, dark, top, left, right, bottom, light, all, zIndex=0, small } = this.props,
            useColor = dark ? "#000" : light ? '#fff': color ? color :'#'+Math.floor(Math.random()*16777215).toString(16),
            corners = all ? ['top', 'left', 'bottom', 'right'] :[top && 'top', left && 'left', bottom && 'bottom', right && 'right'],
            totalCorners = corners.filter(item => item),
            flares = totalCorners.length ? totalCorners : ['top'];

            return (
                <div className="flare-wrapper">
                  <div className="flare-content">
                    {children}
                  </div>
                  <div className={`flare-track ${horizontal ? 'flare-track-horizontal': 'flare-track-vertical'}`}>
                    {flares.map((corner, key) => {
                      const style= {
                        background: this.getGradientBackground(useColor, corner),
                        animation: `${reverse ? `flare-${corner}-reverse`: `flare-${corner}`} 4s 0s infinite`,
                        animationDelay : `${Helper.getRandomInt(1, 9, 0.2)}s`,
                        zIndex: zIndex ? zIndex: 0,
                      };
                      return <div className={`flare flare-${corner} ${small ? 'flare-small': ''}`} style={style} key={key} />
                    })}
                  </div>
                </div>
            )
  }
}

export default FlareAnimation;