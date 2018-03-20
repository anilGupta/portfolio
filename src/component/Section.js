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
    const { children, background, alpha, type='gray', color, parallax, small=false, className} = this.props,
            style = background ? { backgroundImage: `url(${background})`}: {},
            classList = small ? 'small-section' : `page-section ${color? `bg-${color}`: `bg-${type}-lighter`} ${alpha ? `bg-${type}-alfa-${alpha}`: ''}  ${parallax ? `parallax-${parallax}` : 'bg-scroll'}`;
    return <section className={`${classList}  ${className}`} style={style}>
               <div className="container relative">{children}</div>
           </section>
  }
};

export default Section