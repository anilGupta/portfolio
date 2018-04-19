import React, { Component } from 'react';
import helper from '../utils/helper';

class SVGTextAnimation extends Component{

  componentWillMount(){
    this.wrapper = null;
    this.props = {
      paths: [
        'M7.4,41h16.3L13.5,16.8L2.5,42.5H1L13.5,13L26,42.5H7.4V41z',
        'M31.6,42.5v-29h1.5l16.3,26.3V13.5h1.5v29h-1.5L33.1,16.2v26.3H31.6z',
        'M60.4,13.5h1.5v29h-1.5V13.5z',
        'M88.1,41v1.5H71.4v-29h1.5V41H88.1z',
        'M120.3,23l6.6-5.5c-1.5-2-4.1-3-7.9-3c-1.7,0-3.1,0.2-4.2,0.5c-1.1,0.4-2.2,1-3.1,2c-1,0.9-1.7,2.3-2.1,4.1 c-0.5,1.8-0.7,4.1-0.7,6.9c0,2.8,0.2,5.1,0.7,6.9c0.5,1.8,1.2,3.2,2.1,4.1c0.9,1,2,1.6,3.1,2c1.1,0.4,2.5,0.5,4.2,0.5c3.8,0,6.4-1,7.9-2.9v-8.9h1.5v13.2c0,6.4-2.9,9.5-8.8,9.5h-5.9V51h5.9c2.5,0,4.3-0.7,5.5-2c1.2-1.3,1.8-3.8,1.8-7.5v-0.8c-1.8,1.5-4.4,2.3-7.9,2.3c-4.2,0-7.1-1.2-8.9-3.5c-1.8-2.4-2.7-6.2-2.7-11.5c0-5.3,0.9-9.1,2.7-11.5c1.8-2.4,4.8-3.5,8.9-3.5c4.8,0,8.1,1.6,9.9,4.8l-6.3,5.3H120.3z',
        'M138.1,13.5V28c0,5,0.8,8.5,2.4,10.5c1.6,2,3.8,3,6.5,3c2.8,0,4.9-1,6.5-3c1.6-2,2.4-5.5,2.4-10.5V13.5h1.5V28c0,10-3.5,15-10.4,15c-6.9,0-10.4-5-10.4-15V13.5H138.1z',
        'M178.8,31.7l-0.8-1.3l2.8-1.6c2.3-1.3,3.4-3.3,3.4-6c0-5.2-3.9-7.8-11.8-7.8h-4.6v37.5h-1.5v-39h6.1c4.4,0,7.7,0.8,9.9,2.4c2.2,1.6,3.4,3.9,3.4,6.8c0,3.3-1.4,5.8-4.2,7.4L178.8,31.7z',
        'M178.8,31.7l-0.8-1.3l2.8-1.6c2.3-1.3,3.4-3.3,3.4-6c0-5.2-3.9-7.8-11.8-7.8h-4.6v37.5h-1.5v-39h6.1c4.4,0,7.7,0.8,9.9,2.4c2.2,1.6,3.4,3.9,3.4,6.8c0,3.3-1.4,5.8-4.2,7.4L178.8,31.7z',
        'M211.6,13.5V15h-10.5v27.5h-1.5V15h-10.5v-1.5H211.6z',
        'M220,41h16.3l-10.3-24.1l-10.9,25.6h-1.6L226.1,13l12.5,29.5H220V41z'
      ]
    };
    this.initialStyle = this.initialStyle.bind(this);
  }

  componentDidMount(){
    setTimeout(()=> this.wrapper.classList.add('animate'), 1000)
  }

  initialStyle(el){
     if(el){
        const length = el.getTotalLength();
              el.style['stroke-dasharray'] = length;
              el.style['stroke-dashOffset'] = length;
     }
  }

  render() {
    const {  paths } = this.props;
    return (
      <div ref={el => el ? this.wrapper = el : null} className="svgTextAnimation">
        <svg  viewBox="0 0 239.5 55.5">
          <g>
            {paths.map((path, key) => <path d={path} key={key} ref={this.initialStyle} />)}
          </g>
        </svg>
      </div>
    )
  }
}

export default SVGTextAnimation;