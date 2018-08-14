import React, { Component } from 'react';
import Section from "./Section"
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 4
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
};
class BrandsList extends Component{
  constructor(props) {
    super(props);
  }


  render(){
   const { collection } = this.props;
   return <Section small type='light' className="pb-20 pt-20" >
             <div className="row">
               <div className="col-md-10 col-md-offset-1">
                 <div className="small-item-carousel black owl-carousel mb-0 animate-init" data-anim-type="fade-in-right-large" data-anim-delay="100">
                   <Slider {...settings}>
                     {collection.map(({id, name, logo}) => {
                       return <div className="slideItem logo-item" key={id} >
                         <img src={logo} width="120" height="120" alt={name} />
                       </div>
                     })}
                   </Slider>
                 </div>
               </div>
             </div>
        </Section>
  }
}

export default BrandsList;