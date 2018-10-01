import React, { Component} from 'react';
import ParticleEffectButton from 'react-particle-effect-button';
import { withRouter } from 'react-router-dom'


class TiltCard extends Component{

  constructor(props){
     super(props);
  }


  render(){

   const { bgImage='https://tympanus.net/Development/TiltHoverEffects/img/5.jpg' } = this.props;
   return <section className="content content--c3">
            <a href="#" className="tilter tilter--3">
             <figure className="tilter__figure">
               <img className="tilter__image" src={bgImage} alt="img05" />
               <div className="tilter__deco tilter__deco--shine"><div /></div>
               <div className="tilter__deco tilter__deco--overlay"/>
               <figcaption className="tilter__caption">
                 <h3 className="tilter__title">Frank Hausman</h3>
                 <p className="tilter__description">Paris</p>
               </figcaption>
             </figure>
           </a>
    </section>
  }
}

export default TiltCard