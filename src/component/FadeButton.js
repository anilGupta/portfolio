import React, { Component} from 'react';
import ParticleEffectButton from 'react-particle-effect-button';
import { withRouter } from 'react-router-dom'


class FadeButton extends Component{

  constructor(props){
     super(props);
     this._onToggle = this._onToggle.bind(this);
     this._onAnimationComplete = this._onAnimationComplete.bind(this);
  }

  state = {
    hidden: false,
    animating: false
  };


  _onToggle = () => {
    if (this.state.animating) return;

    this.setState({
      hidden: !this.state.hidden,
      animating: true
    })
  };

  _onAnimationComplete = () => {
    this.setState({
      animating: false
    });
    this.props.history.push(this.props.to)
  };



  render(){
   const { options, children } = this.props,
         { hidden } = this.state;
          /*
         */

   return <ParticleEffectButton hidden={hidden} onComplete={this._onAnimationComplete} {...options} >
     <span onClick={this._onToggle}>{children}</span>
    </ParticleEffectButton>
  }
}

export default withRouter(FadeButton)