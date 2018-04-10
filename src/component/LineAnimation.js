import React, { Component } from 'react';
import helper from '../utils/helper'

class LineAnimation extends Component{

  componentWillMount(){
    this.wrapper = null;
  }

  state = {
    lines: []
  };

  breakIntoLines(){
    const paragraph = this.wrapper.innerHTML.split(" "),
          paraClone = paragraph.concat(),
          lines = [],
          containerWidth = this.wrapper.clientWidth;
          this.wrapper.innerHTML = "";
          this.wrapper.style.display = 'inline-block';
          let   lastWidth = 0;
                paragraph.forEach(word =>{
                  this.wrapper.innerHTML = `${this.wrapper.innerHTML} ${word}`;
                  const width = this.wrapper.clientWidth;
                  if(width >= containerWidth){
                    const lineWords = paraClone.splice(0, paraClone.findIndex(i => i == word));
                    lines.push(lineWords.join(" "));
                    lastWidth = 0;
                    this.wrapper.innerHTML = `${word}`;
                  }else{
                    lastWidth = width
                  }
                });
                paraClone.length ? lines.push(paraClone.join(" ")) : null;
    return lines
  }

  componentDidMount(){
      const lines = this.breakIntoLines();
          this.setState({
            lines: lines
          }, () =>{
             setTimeout(()=> this.wrapper.classList.add('animate-line'), 1000)
          })
  }

  render() {
    const { children, dealy = 0.4 } = this.props,
          { lines } = this.state,
            layers   = ['first', 'second'],
            totalDealy = (lines.length * dealy) / 2;

    return (
      <div ref={el => el ? this.wrapper = el : null} className='text-line-animation'>{!lines.length ? children : lines.map((line, key) => {
        return <div key={key} className={`split-line-wrapper`}>
                  {layers.map(layer => {
                    const
                      index = key + 1,
                      style = layer == 'second' ? {
                        transitionDuration: `${dealy}s`,
                        transitionDelay: `${totalDealy + index*dealy}s`,
                      }: {};
                    return (
                      <div className="line-wrapper" key={layer} style={{ transitionDelay: `${key*dealy}s`, }}>
                        <div className="inner-text" style={style}>{line}</div>
                      </div>
                    )
                  })}
              </div>
      })}</div>
    )
  }
}

export default LineAnimation;