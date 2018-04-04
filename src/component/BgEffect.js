import React, { Component } from 'react';
import paper from 'paper';

class BgEffect extends Component{

  static defaultProps = {
    totalParticles : 15
  };

  constructor(props) {
    super(props);
    this.paper = null;
    this.paths = [];
    this.top = 0.0;
    this.canvas = null;
    this.initialize = this.initialize.bind(this);
    this.setupCanvas = this.setupCanvas.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount(){
     this.setupCanvas();
     this.initialize();
     this.runAnimation();
  }

  setupCanvas(){
     paper.setup(this.canvas);
  }

  runAnimation(){
     paper.view.onFrame = this.animate
  }

  initialize(){
    const { totalParticles } = this.props;
    console.log('total pars', totalParticles);

    for(let index = 0; index < totalParticles; index ++){
      const size = 3 + 15 * Math.random();
      //creating shapes
      if(index/3 != parseInt(index/3)){
        this.paths[index] = new paper.Path.RegularPolygon(new paper.Point(size, size), parseInt( 3 + Math.random() * 6 ), size);
      }else{
        this.paths[index] = new paper.Path.Rectangle([size * 0.75, size * 0.75], [size, size]);
      }

      //giving structure and styles to shape
      this.paths[index].size = size * 3;
      this.paths[index].selected = false;
      this.paths[index].rotate( (360/totalParticles) * index);
      this.paths[index].randomX = 3 + Math.random() * 30;
      this.paths[index].randomY = 3 + Math.random() * 30;
      this.paths[index].speedX = 0.5 + Math.random() * 2;
      this.paths[index].speedY = 0.5 + Math.random() * 2;
      this.paths[index].speedR = 0.1 + Math.random() * 0.4;
      this.paths[index].posY = 100 + Math.random() * $(window).height() * 3.5;
      this.paths[index].offsetY = 0;
      this.paths[index].strokeColor = '#333333';
      this.paths[index].strokeWidth = 2;
      //this.paths[index].dashArray = [1, 0];
      if(index/3 == parseInt(index/3)){
        this.paths[index].smooth();
      }
    }

    console.log(this.paths);

  }

  animate(event){
       console.log("calling aniatmin --")
       
       const { totalParticles } = this.props;
       this.top +=($(window).scrollTop()- this.top) * 0.5;
       for(let index = 0; index< totalParticles; index++){
          const sin = Math.sin(event.time * this.paths[index].speedX + index),
            cos = Math.cos(event.time * this.paths[index].speedY + index);
            if(index * 0.5 == parseInt(index * 0.5)){
              this.paths[index].rotate(this.paths[index].speedR);
            }else{
              this.paths[index].rotate(-this.paths[index].speedR);
            }

            this.paths[index].offsetY -= 0.03 * this.paths[index].size;
            this.paths[index].position.x = ( ( $(window).width() ) / totalParticles ) * index + sin * this.paths[index].randomX;
            this.paths[index].position.y = this.paths[index].posY + cos * this.paths[index].randomY - this.top + this.paths[index].offsetY;
            if( this.paths[index].position.y + $(window).scrollTop() < -100 ){
              this.paths[index].offsetY = $(window).height() + $( window ).scrollTop() + 100
            }
       }
       paper.view.draw();
  }

  render(){
     return(
       <div className="canvas">
         <canvas  ref={el => el ? this.canvas = el : null} data-resize className="fullScreen" />
       </div>
     )
  }
}


export default BgEffect;