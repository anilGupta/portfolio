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

  getShape(type){
    switch(type){
      case "heart": {
        const heartPath = "m 0,0 c -23.041766,0.83580444 -45.957506,-13.636713 -53.214216,-35.870795 -9.044427,-25.923826 -5.460719,-56.569647 12.160635,-78.160115 22.650703,-29.04655 48.0826046,-55.79652 72.034504,-83.76112 8.809983,-10.03071 17.624834,-20.05716 26.446077,-30.07797 31.190897,35.92782 63.19026,71.17456 93.65203,107.72333 13.43897,15.76905 22.6092,35.778594 21.45879,56.840754 0.48464,23.638597 -10.75406,49.609557 -33.86758,58.7248057 C 112.36925,6.1811385 80.265186,-2.4521544 61.834,-23.816 57.726053,-27.744191 52.686989,-24.33721 49.898807,-20.558818 36.779203,-7.4375533 18.610104,0.25470281 0,0 Z m 57.425,-235.439 c -32.685154,37.5809 -66.2375677,74.43048 -98.145369,112.67407 -14.124002,16.53702 -23.327559,37.678088 -22.178691,59.699254 -0.431137,24.929611 11.342458,51.986317 35.279683,62.35280613 C 0.56303289,11.862969 35.755937,3.1381833 56.076,-19.751 c 7.408437,0.521947 12.572556,12.0397848 20.578869,14.5057566 26.919311,16.3635164 67.173411,13.9333199 86.956051,-12.4756016 15.52317,-21.084605 17.17501,-50.11562 9.71392,-74.576731 -10.04597,-26.327994 -31.5674,-45.682854 -49.13526,-66.974994 -22.22828,-25.41207 -44.467143,-50.815 -66.76458,-76.16643 z";
        return new paper.Path(heartPath)
      }

      case "mount": {
        const p1 = 'm 11.339286,0.2677 c 3.270838,5.6653767 6.541676,11.330753 9.812514,16.99613 -6.541676,0 -13.0833519,0 -19.6250279,0 C 4.7976101,11.598453 8.068448,5.9330767 11.339286,0.2677 Z m 0,-2.15829 C 7.445325,4.85393 3.5513641,11.59845 -0.3425969,18.34297 c 7.787922,0 15.5758439,0 23.3637659,0 C 19.127208,11.59845 15.233247,4.85393 11.339286,-1.89059 Z',
              p2 = 'm 17.971152,1.34684 c 3.27084,5.6653767 6.54168,11.330753 9.81252,16.99613 -6.541677,0 -13.083353,0 -19.6250299,0 C 11.429479,12.677593 14.700315,7.0122167 17.971152,1.34684 Z m 0,-2.1583 c -3.89396,6.7445233 -7.78792,13.489047 -11.6818799,20.23357 7.7879229,0 15.5758469,0 23.3637699,0 C 25.759079,12.677587 21.865115,5.9330633 17.971152,-0.81146 Z';
          return new paper.CompoundPath(new paper.Path(p1), new paper.Path(p2) );
      }

    }
  }


  runAnimation(){
     paper.view.onFrame = this.animate
  }

  initialize(){
    const { totalParticles } = this.props;
    for(let index = 0; index < totalParticles; index ++){
      const size = 3 + 15 * Math.random();
        this.paths[index] = index % 4 === 0 ? this.getShape('mount'): new paper.Path.RegularPolygon(new paper.Point(size, size), parseInt( 3 + Math.random() * 6 ), size);
        const color = '#'+Math.floor(Math.random()* 16777215).toString(16);
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
        this.paths[index].strokeColor = "hotpink";
        this.paths[index].strokeWidth = 2;
        //this.paths[index].dashArray = [1, 0];
        //this.paths[index].smooth();
    }
  }

  animate(event){
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