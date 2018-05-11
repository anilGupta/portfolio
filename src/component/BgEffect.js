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
        //if(index/2 != parseInt(index/2)){
           const pathData1 = 'M17.8,8.6c-0.1-0.9-2.2-1.2-4.6-0.6c-2,0.5-3.7,0.8-4.2,0.9c0.5,0,2.2,0.3,4.3,0.6C15.7,9.9,17.9,9.5,17.8,8.6tz';
           const pathData2 = 'M5.6,17.3c0.9,0.3,1.9-1.5,2.4-4c0.4-2,0.7-3.7,0.9-4.2C8.7,9.6,7.8,11,6.7,12.8C5.2,14.8,4.7,16.9,5.6,17.3z';
           const pathData3 = 'M0,7.8c-0.1,0.9,1.9,1.5,4.4,1.3c2-0.2,3.7-0.2,4.3-0.2C8.2,8.8,6.6,8.3,4.6,7.6C2.3,6.8,0,6.9,0,7.8z';
           const pathData4 = 'M2.5,2.5C1.9,3.2,3.1,4.9,5.2,6.3c1.7,1.1,3.1,2.1,3.5,2.5C8.4,8.4,7.4,7,6.2,5.3C4.9,3.2,3.2,1.9,2.5,2.5z';
           const pathData5 = 'M9.1,4.4C9.3,1.9,8.7-0.1,7.8,0c-0.9,0.1-1,2.3-0.2,4.6c0.7,2,1.2,3.6,1.3,4.1C8.8,8.2,8.9,6.5,9.1,4.4z';
           const pathData6 = 'M9.1,4.4C9.3,1.9,8.7-0.1,7.8,0c-0.9,0.1-1,2.3-0.2,4.6c0.7,2,1.2,3.6,1.3,4.1C8.8,8.2,8.9,6.5,9.1,4.4z';
           this.paths[index] = new paper.CompoundPath(new paper.Path(pathData1), new paper.Path(pathData2), new paper.Path(pathData3), new paper.Path(pathData4), new paper.Path(pathData5), new paper.Path(pathData6));
        //}else{
          //this.paths[index] = new paper.Path.Rectangle([size * 0.75, size * 0.75], [size, size]);
        //}

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
       //console.log("calling aniatmin --")
       
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