import React, { Component } from 'react';
import Config from '../constants/Config'
import 'gmap3';

class GoogleMap extends Component{

  componentWillMount(){
     this.loadSDK()
     this.mapElement = null
  }

  loadSDK(){
    console.log("calling sdk");
    
    (function(d, s, id){
      let js, fjs = d.getElementsByTagName(s)[0];
      if(d.getElementById(id)){ return; }
      js     = d.createElement(s);
      js.id  = id;
      js.src = `https://maps.googleapis.com/maps/api/js?key=${Config.googleMapKey}`;
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'googlemap-jssdk'));
  }

  componentDidMount(){
       setTimeout(()=>{
          this.initMap();
       }, 1000)
  }

  initMap(){
    const { address } = this.props;
          $(this.mapElement).gmap3({
            action: "init",
            marker: {
              address: address,
              options: {
                icon: "/assets/images/map-marker.png"
              }
            },
            map: {
              options: {
                zoom: 14,
                zoomControl: true,
                zoomControlOptions: {
                  style: 1,
                  position: 5
                },
                mapTypeControl: false,
                scaleControl: false,
                scrollwheel: false,
                streetViewControl: false,
                draggable: true,
                styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
              }
            }
          });
  }


  render() {
    return (
      <div id="map-canvas" ref={el => { el ? this.mapElement = el : null}}></div>
    );
  }
}

export default GoogleMap;