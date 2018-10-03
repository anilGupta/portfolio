import React, { Component} from 'react';
import ParticleEffectButton from 'react-particle-effect-button';
import { withRouter } from 'react-router-dom';
import anime from 'animejs';


class TiltCard extends Component{

  constructor(props){
     super(props);
     this.DOM = {};
     this.cacheElements = this.cacheElements.bind(this);
     this.handleMouseEnter = this.handleMouseEnter.bind(this);
     this.handleMouseLeave = this.handleMouseLeave.bind(this);
     this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  static defaultProps = {
     defaultOption : {
       imgWrapper : {
         translation : {x: 0, y: 0, z: 0},
         rotation : {x: -5, y: 5, z: 0},
         reverseAnimation : {
           duration : 1200,
           easing : 'easeOutElastic',
           elasticity : 600
         }
       },
       lines : {
         translation : {x: 10, y: 10, z: [0,10]},
         reverseAnimation : {
           duration : 1000,
           easing : 'easeOutExpo',
           elasticity : 600
         }
       },
       caption : {
         translation : {x: 20, y: 20, z: 0},
         rotation : {x: 0, y: 0, z: 0},
         reverseAnimation : {
           duration : 1500,
           easing : 'easeOutElastic',
           elasticity : 600
         }
       },
       overlay : {
         translation : {x: 10, y: 10, z: [0,50]},
         reverseAnimation : {
           duration : 500,
           easing : 'easeOutExpo'
         }
       },
       shine : {
         translation : {x: 50, y: 50, z: 0},
         reverseAnimation : {
           duration : 1200,
           easing : 'easeOutElastic',
           elasticity: 600
         }
       }
     },
     options : {
       imgWrapper : {
         rotation : {x: -5, y: 10, z: 0},
         reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
       },
       caption : {
         translation : {x: 20, y: 20, z: 0},
         reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
       },
       overlay : {
         translation : {x: 5, y: -5, z: 0},
         rotation : {x: 0, y: 0, z: 6},
         reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
       },
       shine : {
         translation : {x: 50, y: 50, z: 0},
         reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
       }
     },
  };

  getPosition(e){
    let posx = 0,
        posy = 0;
       if(!e){
         let e = window.event;
       }

       if(e.pageX || e.pageY){
         posx = e.pageX;
         posy = e.pageY;
       }
       else if(e.clientX || e.clientY) 	{
          posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
       }
       return { x : posx, y : posy }
  }

  cacheElements(el){
    if(!el) return

    this.DOM.el = el;
    this.DOM.animatable = {};
    this.DOM.animatable.imgWrapper = this.DOM.el.querySelector('.tilter__figure');
    this.DOM.animatable.lines = this.DOM.el.querySelector('.tilter__deco--lines');
    this.DOM.animatable.caption = this.DOM.el.querySelector('.tilter__caption');
    this.DOM.animatable.overlay = this.DOM.el.querySelector('.tilter__deco--overlay');
    this.DOM.animatable.shine = this.DOM.el.querySelector('.tilter__deco--shine > div');
    console.log(this.DOM)

  }

  componentDidMount(){
     this.bindEvents();
  }

  bindEvents(){
    this.DOM.el.addEventListener('mousemove', this.handleMouseMove);
    this.DOM.el.addEventListener('mouseleave', this.handleMouseLeave);
    this.DOM.el.addEventListener('mouseenter', this.handleMouseEnter);
  }

  handleMouseEnter(){
    for(let key in this.DOM.animatable) {
      anime.remove(this.DOM.animatable[key]);
    }
  }

  handleMouseMove(ev){
    requestAnimationFrame(() => {this.updateLayout(ev) });
  }

  handleMouseLeave(){
    const options = Object.assign({}, this.props.defaultOption, this.props.options);
    requestAnimationFrame(() => {
      for(let key in this.DOM.animatable) {
        if(options[key] === undefined ) {continue;}
        anime({
          targets: this.DOM.animatable[key],
          duration: options[key].reverseAnimation !== undefined ? options[key].reverseAnimation.duration || 0 : 1,
          easing: options[key].reverseAnimation !== undefined ? options[key].reverseAnimation.easing || 'linear' : 'linear',
          elasticity: options[key].reverseAnimation !== undefined ? options[key].reverseAnimation.elasticity || null : null,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0
        });
      }
    });
  }

  updateLayout(ev){

    const mousepos = this.getPosition(ev),
          docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop},
          bounds = this.DOM.el.getBoundingClientRect(),
          relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top },
          options = Object.assign({}, this.props.defaultOption, this.props.options);

          for(let key in this.DOM.animatable) {

              if(! this.DOM.animatable[key] || !options[key]) {
                continue;
              }

              const t = options[key] !== undefined ? options[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
                    r = options[key] !== undefined ? options[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
                    setRange = (obj) =>{
                      for(let k in obj) {
                        if( obj[k] === undefined ) {
                          obj[k] = [0,0];
                        }
                        else if( typeof obj[k] === 'number' ) {
                          obj[k] = [-1*obj[k],obj[k]];
                        }
                      }
                    };
                    setRange(t);
                    setRange(r);

                    const transforms = {
                      translation : {
                        x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
                        y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
                        z: (t.z[1]-t.z[0])/bounds.height*relmousepos.y + t.z[0],
                      },
                      rotation : {
                        x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
                        y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0],
                        z: (r.z[1]-r.z[0])/bounds.width*relmousepos.x + r.z[0]
                      }
                    };


                    this.DOM.animatable[key].style.WebkitTransform = this.DOM.animatable[key].style.transform = 'translateX(' + transforms.translation.x + 'px) translateY(' + transforms.translation.y + 'px) translateZ(' + transforms.translation.z + 'px) rotateX(' + transforms.rotation.x + 'deg) rotateY(' + transforms.rotation.y + 'deg) rotateZ(' + transforms.rotation.z + 'deg)';
          }
  }

  render(){

   const { bgImage='https://tympanus.net/Development/TiltHoverEffects/img/5.jpg' } = this.props;
   return <section >
            <a href="#" className="tilter tilter--3" ref={this.cacheElements}>
             <figure className="tilter__figure">
               <img className="tilter__image" src={bgImage} alt="img05" />
               <div className="tilter__deco tilter__deco--shine"><div /></div>
               <div className="tilter__deco tilter__deco--overlay"/>
               <figcaption className="tilter__caption">
                 <h3 className="tilter__title">Anil Gupta</h3>
                 <p className="tilter__description">Paris</p>
               </figcaption>
             </figure>
           </a>
    </section>
  }
}

export default TiltCard