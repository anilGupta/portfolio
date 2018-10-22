import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import anime from 'animejs';
const effects = {
  'Hapi': {
    animeOpts: {
      duration: function(t,i) {
        return 600 + i*75;
      },
      easing: 'easeOutExpo',
      delay: function(t,i) {
        return i*50;
      },
      opacity: {
        value: [0,1],
        easing: 'linear'
      },
      scale: [0,1]
    }
  },
  'Amun': {
    // Sort target elements function.
    sortTargetsFn: function(a,b) {
      var aBounds = a.getBoundingClientRect(),
        bBounds = b.getBoundingClientRect();

      return (aBounds.left - bBounds.left) || (aBounds.top - bBounds.top);
    },
    animeOpts: {
      duration: function(t,i) {
        return 500 + i*50;
      },
      easing: 'easeOutExpo',
      delay: function(t,i) {
        return i * 20;
      },
      opacity: {
        value: [0,1],
        duration: function(t,i) {
          return 250 + i*50;
        },
        easing: 'linear'
      },
      translateY: [400,0]
    }
  },
  'Kek': {
    sortTargetsFn: function(a,b) {
      return b.getBoundingClientRect().left - a.getBoundingClientRect().left;
    },
    animeOpts: {
      duration: 800,
      easing: [0.1,1,0.3,1],
      delay: function(t,i) {
        return i * 20;
      },
      opacity: {
        value: [0,1],
        duration: 600,
        easing: 'linear'
      },
      translateX: [-500,0],
      rotateZ: [15,0]
    }
  },
  'Isis': {
    animeOpts: {
      duration: 900,
      elasticity: 500,
      delay: function(t,i) {
        return i*15;
      },
      opacity: {
        value: [0,1],
        duration: 300,
        easing: 'linear'
      },
      translateX: function() {
        return [anime.random(0,1) === 0 ? 100 : -100,0];
      },
      translateY: function() {
        return [anime.random(0,1) === 0 ? 100 : -100,0];
      }
    }
  },
  'Montu': {
    perspective: 800,
    origin: '50% 0%',
    animeOpts: {
      duration: 1500,
      elasticity: 400,
      delay: function(t,i) {
        return i*75;
      },
      opacity: {
        value: [0,1],
        duration: 1000,
        easing: 'linear'
      },
      rotateX: [-90,0]
    }
  },
  'Osiris': {
    perspective: 3000,
    animeOpts: {
      duration: function() {
        return anime.random(500,1000)
      },
      easing: [0.2,1,0.3,1],
      delay: function(t,i) {
        return i*50;
      },
      opacity: {
        value: [0,1],
        duration: 700,
        easing: 'linear'
      },
      translateZ: {
        value: [-3000,0],
        duration: 1000
      },
      rotateY: ['-1turns',0]
    }
  },
  'Satet': {
    animeOpts: {
      duration: 800,
      elasticity: 600,
      delay: function(t,i) {
        return i*100;
      },
      opacity: {
        value: [0,1],
        duration: 600,
        easing: 'linear'
      },
      scaleX: {
        value: [0.4,1]
      },
      scaleY: {
        value: [0.6,1],
        duration: 1000
      }
    }
  },
  'Atum': {
    sortTargetsFn: function(a,b) {
      var docScrolls = {top : document.body.scrollTop + document.documentElement.scrollTop},
        y1 = window.innerHeight + docScrolls.top,
        aBounds = a.getBoundingClientRect(),
        ay1 = aBounds.top + docScrolls.top + aBounds.height/2,
        bBounds = b.getBoundingClientRect(),
        by1 = bBounds.top + docScrolls.top + bBounds.height/2;

      return Math.abs(y1-ay1) - Math.abs(y1-by1);
    },
    perspective: 1000,
    origin: '50% 0%',
    animeOpts: {
      duration: 800,
      easing: [0.1,1,0.3,1],
      delay: function(t,i) {
        return i*35;
      },
      opacity: {
        value: [0,1],
        duration: 600,
        easing: 'linear'
      },
      translateX: [100,0],
      translateY: [-100,0],
      translateZ: [400,0],
      rotateZ: [10,0],
      rotateX: [75,0]
    }
  },
  'Ra': {
    origin: '50% 0%',
    animeOpts: {
      duration: 500,
      easing: 'easeOutBack',
      delay: function(t,i) {
        return i * 100;
      },
      opacity: {
        value: [0,1],
        easing: 'linear'
      },
      translateY: [400,0],
      scaleY: [
        {value: [3,0.6], delay: function(t,i) {return i * 100 + 120;}, duration: 300, easing: 'easeOutExpo'},
        {value: [0.6,1], duration: 1400, easing: 'easeOutElastic'}
      ],
      scaleX: [
        {value: [0.9,1.05], delay: function(t,i) {return i * 100 + 120;}, duration: 300, easing: 'easeOutExpo'},
        {value: [1.05,1], duration: 1400, easing: 'easeOutElastic'}
      ]
    }
  },
  'Sobek': {
    animeOpts: {
      duration: 600,
      easing: 'easeOutExpo',
      delay: function(t,i) {
        return i*100;
      },
      opacity: {
        value: [0,1],
        duration: 100,
        easing: 'linear'
      },
      translateX: function(t,i) {
        var docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft},
          x1 = window.innerWidth/2 + docScrolls.left,
          tBounds = t.getBoundingClientRect(),
          x2 = tBounds.left +docScrolls.left + tBounds.width/2;

        return [x1-x2,0];
      },
      translateY: function(t,i) {
        var docScrolls = {top : document.body.scrollTop + document.documentElement.scrollTop},
          y1 = window.innerHeight + docScrolls.top,
          tBounds = t.getBoundingClientRect(),
          y2 = tBounds.top + docScrolls.top + tBounds.height/2;

        return [y1-y2,0];
      },
      rotate: function(t,i) {
        var x1 = window.innerWidth/2,
          tBounds = t.getBoundingClientRect(),
          x2 = tBounds.left + tBounds.width/2;

        return [x2 < x1 ? 90 : -90,0];
      },
      scale: [0,1]
    }
  },
  'Ptah': {
    itemOverflowHidden: true,
    sortTargetsFn: function(a,b) {
      return b.getBoundingClientRect().left - a.getBoundingClientRect().left;
    },
    origin: '100% 0%',
    animeOpts: {
      duration: 500,
      easing: 'easeOutExpo',
      delay: function(t,i) {
        return i * 20;
      },
      opacity: {
        value: [0,1],
        duration: 400,
        easing: 'linear'
      },
      rotateZ: [45,0]
    }
  },
  'Bes': {
    revealer: true,
    revealerOrigin: '100% 50%',
    animeRevealerOpts: {
      duration: 800,
      delay: function(t,i) {
        return i*75;
      },
      easing: 'easeInOutQuart',
      scaleX: [1,0]
    },
    animeOpts: {
      duration: 800,
      easing: 'easeInOutQuart',
      delay: function(t,i) {
        return i*75;
      },
      opacity: {
        value: [0,1],
        easing: 'linear'
      },
      scale: [0.8,1]
    }
  },
  'Seker': {
    revealer: true,
    revealerOrigin: '50% 100%',
    animeRevealerOpts: {
      duration: 500,
      delay: function(t,i) {
        return i*50;
      },
      easing: [0.7,0,0.3,1],
      translateY: [100,0],
      scaleY: [1,0]
    },
    animeOpts: {
      duration: 500,
      easing: [0.7,0,0.3,1],
      delay: function(t,i) {
        return i*50;
      },
      opacity: {
        value: [0,1],
        duration: 400,
        easing: 'linear'
      },
      translateY: [100,0],
      scale: [0.8,1]
    }
  },
  'Nut': {
    revealer: true,
    revealerColor: '#1d1d1d',
    itemOverflowHidden: true,
    animeRevealerOpts: {
      easing: 'easeOutCubic',
      delay: function(t,i) {
        return i*100;
      },
      translateX: [
        {value: ['101%','0%'], duration: 400 },
        {value: ['0%','-101%'], duration: 400}
      ]
    },
    animeOpts: {
      duration: 900,
      easing: 'easeOutCubic',
      delay: function(t,i) {
        return 400+i*100;
      },
      opacity: {
        value: 1,
        duration: 1,
        easing: 'linear'
      },
      scale: [0.8,1]
    }
  },
  'Shu': {
    lineDrawing: true,
    animeLineDrawingOpts: {
      duration: 800,
      delay: function(t,i) {
        return i*150;
      },
      easing: 'easeInOutSine',
      strokeDashoffset: [anime.setDashoffset, 0],
      opacity: [
        {value: [0,1]},
        {value: [1,0], duration: 200, easing: 'linear', delay:500}
      ]
    },
    animeOpts: {
      duration: 800,
      easing: [0.2,1,0.3,1],
      delay: function(t,i) {
        return i*150 + 800;
      },
      opacity: {
        value: [0,1],
        easing: 'linear'
      },
      scale: [0.5,1]
    }
  }
}

class MasonryList extends Component{
  constructor(props) {
    super(props);
    this.el = null;
    this.items = null;
    this.cacheElements = this.cacheElements.bind(this);
    this.resetStyle = this.resetStyle.bind(this);
    this.animate = this.animate.bind(this);
  }

  static defaultProps={
     animationName: 'Sobek'
  }

  componentDidMount(){
     this.cacheElements();
     this.resetStyle();
     this.animate(this.props.animationName);
  }

  componentDidUpdate(prevProps){
    if(this.props.items && prevProps.items !== this.props.items){
      this.cacheElements(prevProps.items, this.props.items);
      this.resetStyle();
      this.animate(this.props.animationName);
    }
  }

  cacheElements(from=0, to){
    const { id, itemSelector }= this.props,
            allItems = Array.from(this.el.querySelectorAll(`.${itemSelector}`));
            if(to){
               this.items = allItems.slice(from, to)
            }else{
               this.items = allItems;
            }
  }

  resetStyle(){
    this.el.style.WebkitPerspective = this.el.style.perspective = 'none';
    this.items.forEach(item => {
      const gItem = item.parentNode;
      item.style.opacity = 0;
      item.style.WebkitTransformOrigin = item.style.transformOrigin = '50% 50%';
      item.style.transform = 'none';

      const svg = item.parentNode.querySelector('svg.grid__deco');
      if(svg){
        gItem.removeChild(svg);
      }

      const revealer = item.parentNode.querySelector('.grid__reveal');
      if(revealer){
        gItem.removeChild(revealer);
      }

      gItem.style.overflow = '';
    });
  }

  animate(effect){

      const effectSettings = effects[effect],
            animeOpts = effectSettings.animeOpts

          if(effectSettings.perspective != undefined){
            this.items.forEach(function(item) {
              item.parentNode.style.WebkitPerspective = item.parentNode.style.perspective = effectSettings.perspective + 'px';
            });
          }

          if(effectSettings.origin != undefined){
            this.items.forEach(function(item) {
              item.style.WebkitTransformOrigin = item.style.transformOrigin = effectSettings.origin;
            });
          }

          if(effectSettings.lineDrawing != undefined){
            this.items.forEach(function(item) {
              // Create SVG.
              const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                path = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
                itemW = item.offsetWidth,
                itemH = item.offsetHeight;

                svg.setAttribute('width', itemW + 'px');
                svg.setAttribute('height', itemH + 'px');
                svg.setAttribute('viewBox', '0 0 ' + itemW + ' ' + itemH);
                svg.setAttribute('class', 'grid__deco');
                path.setAttribute('d', 'M0,0 l' + itemW + ',0 0,' + itemH + ' -' + itemW + ',0 0,-' + itemH);
                path.setAttribute('stroke-dashoffset', anime.setDashoffset(path));
                svg.appendChild(path);
                item.parentNode.appendChild(svg);
            });

            const animeLineDrawingOpts = effectSettings.animeLineDrawingOpts;
                  animeLineDrawingOpts.targets = this.el.querySelectorAll('.grid__deco > path');
                  anime.remove(animeLineDrawingOpts.targets);
                  anime(animeLineDrawingOpts);
          }

          if(effectSettings.revealer != undefined){
            this.items.forEach(function(item) {
              const revealer = document.createElement('div');
                    revealer.className = 'grid__reveal';
                    if(effectSettings.revealerOrigin != undefined){
                      revealer.style.transformOrigin = effectSettings.revealerOrigin;
                    }
                    if(effectSettings.revealerColor != undefined){
                      revealer.style.backgroundColor = effectSettings.revealerColor;
                    }
                    item.parentNode.appendChild(revealer);
            });

            const animeRevealerOpts = effectSettings.animeRevealerOpts;
                  animeRevealerOpts.targets = this.el.querySelectorAll('.grid__reveal');
                  animeRevealerOpts.begin = function(obj) {
                    for(let i = 0, len = obj.animatables.length; i < len; ++i) {
                      obj.animatables[i].target.style.opacity = 1;
                    }
                  };
                  anime.remove(animeRevealerOpts.targets);
                  anime(animeRevealerOpts);
          }

          if(effectSettings.itemOverflowHidden){
            this.items.forEach(function(item) {
              item.parentNode.style.overflow = 'hidden';
            });
          }

          animeOpts.targets = effectSettings.sortTargetsFn && typeof effectSettings.sortTargetsFn === 'function' ? this.items.sort(effectSettings.sortTargetsFn) : this.items;
          anime.remove(animeOpts.targets);
          anime(animeOpts);
  }

  render(){
    const { children, id, itemSelector, className='project-list' } = this.props,
            options = { transitionDuration: 0 };
    return <Masonry id={id} options={options} className={className} ref={el => {
      this.el = document.querySelector(`#${id}`);
    }} >{children}</Masonry>
  }
}

export default MasonryList