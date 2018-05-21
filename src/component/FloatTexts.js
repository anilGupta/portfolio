import React, { Component } from 'react';
import helper from '../utils/helper'

class FloatTexts extends Component{

  componentWillMount(){
    this.wrapper = null;
  }

  static defaultProps= {
    dealy : 1000
  }

  componentDidMount(){
    const { dealy } = this.props;
    setTimeout(() => this.wrapper.classList.add("animate-word"), dealy)
  }

  render() {
    const { children, start=6, end=18} = this.props,
            paragraph = typeof children == "string" ? [children] : children
    return (
      <div ref={el => { el ? this.wrapper = el : null}} >{paragraph.filter(item => typeof item == 'string').map((line, key)=>{
        return <div className='letters' key={key}>{line.split("").map((words, i) => {
          const style = {
             transitionDuration: `${helper.getRandomInt(start, end, 0.1)}s`,
             transitionDelay: `${helper.getRandomInt(start, end, 0.1)}s`,
          };
          return words == ' ' ? ' ' : <span className="letter" key={i} style={style}>{words.replace(" ")}</span>
        })}</div>
      })}</div>
    );
  }
}

export default FloatTexts;