import React, { Component } from 'react';
import helper from '../utils/helper'

class TextLineAnimation extends Component{

  componentWillMount(){
    this.wrapper = null;
  }

  state = {
    lines: []
  };

  componentDidMount(){
    const paragraph = this.wrapper.innerHTML.split(" "),
          paraClone = paragraph.concat(),
          lines = [];
          this.wrapper.style.display = 'inline-block';
          this.wrapper.innerHtml = "";
    var   lastWidth = this.wrapper.clientWidth;
          paragraph.forEach(word =>{
              this.wrapper.innerHTML = `${this.wrapper.innerHTML} ${word} `;
              const width = this.wrapper.clientWidth;
                    if(width == lastWidth){
                        console.log("matching", width, lastWidth)
                        const lineWords = paraClone.splice(0, paraClone.findIndex(i => i == word))
                              lines.push(lineWords.join(" "));
                              lastWidth = 0;
                              this.wrapper.innerHTML = word
                    }else{
                       lastWidth = width
                    }
          });
          paraClone.length ? lines.push(paraClone.join(" ")) : null;
          console.log(lines);
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={el => el ? this.wrapper = el : null} className='line-wrapper'>{children}</div>
    )
  }
}

export default TextLineAnimation;