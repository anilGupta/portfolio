import React, { Component } from 'react';
import Section from "./Section"
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
  //lazyLoad: true,
  dotsClass: "slick-dots slick-thumb",
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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
class ProjectSlider extends Component{
  constructor(props) {
    super(props);
  }


  render(){
   const { collection, onClick } = this.props;
   return <Section small type='light' className="pb-20 pt-20" container={false} >
             <div className="" >
               <Slider {...settings} customPaging={(i)=> <a key={i}><img src={`${collection[i].url}s.jpg`} /> </a>}>
                 {collection.map((item, i) => {
                   const url=  item && item.url ? `${item.url}.jpg` : false;
                   return <div className="slideItem" key={i} >
                     <img src={url} alt={item.title} onClick={onClick.bind(null, i)} />
                   </div>
                 })}
               </Slider>
             </div>
        </Section>
  }
}

export default ProjectSlider;