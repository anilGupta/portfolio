import React, { Component } from 'react';
import helper from '../utils/helper';

class WordAnimation extends Component{

  componentWillMount(){
    this.wrapper = null;
  }

  state = {
    lines: []
  };


  componentDidMount(){
    setTimeout(()=> this.wrapper.classList.add('animate-word'), 1000)
  }

  setWidth(el){
     if(el){
       el.style.width = `${el.clientWidth + 5}px`;
       el.firstChild.style.width = 0
       //el.style.height = `${el.clientHeight/2 + 5 }px`;
       //el.style.lineHeight = `${el.clientHeight}px`;

     }
  }

  render() {
    const { children } = this.props,
            words = children.split(" ");
    return (
      <div ref={el => el ? this.wrapper = el : null} className='text-word-animation'>
        {words.map((word, key) => <div key={key} className="word-wrapper" ref={this.setWidth}>
          <span className="word" style={{ transitionDelay : `${helper.getRandomInt(6, 28)}s` }} >{word}</span>
        </div>)}
      </div>
    )
  }
}

export default WordAnimation;