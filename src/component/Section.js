import React, { Component} from 'react';

class Section extends Component{

  constructor(props) {
    super(props);
  }

  componentDidMount(){
     const { parallax }  = this.props;
             if(parallax){

             }
  }


  render(){
    const { children, background, alpha, type='gray', color, parallax} = this.props,
            style = background ? { backgroundImage: `url(${background})`}: {};
    return <section className={`page-section ${color? `bg-${color}`: `bg-${type}-lighter`} ${alpha ? `bg-${type}-alpha-${alpha}`: ''}  ${parallax ? `parallax-${parallax}` : 'bg-scroll'} `} style={style}>
               <div className="container relative">{children}</div>
           </section>
  }
};

export default Section