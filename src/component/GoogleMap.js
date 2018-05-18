import React, { Component } from 'react';
import Config from '../constants/Config'
class GoogleMap extends Component{
  constructor(props){
    super(props);
    this.mapElement = null;
    this.styles   =  [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
    this.createMap = this.createMap.bind(this);
  }

  static defaultProps = {
    center : {lat: 19.028344, lng: 72.869804},
    zoom   : 16,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  };

  componentWillMount(){
  }

  componentDidMount(){
    this.loadSDK().then(this.createMap);
  }

  createMap(){
    const Map = google.maps;
    this.map = new Map.Map(this.mapElement, Object.assign({}, this.props, { styles: this.styles }));
    this.marker = new Map.Marker({
      position: this.props.center,
      map: this.map,
      icon: '/assets/images/map-marker.png'
    });
    this.infoWindow = new Map.InfoWindow({ content:
        `<div>
              <h2 class="section-title font-alt" style="margin:5px">Anil Gupta</h2>
              <hr style="margin: 1px 0" />
              <p style="margin:5px">57, S.M. Road, Antophill church, Mumbai - 400037</p>
          </div>`
    });
    this.marker.addListener('click', ()=>{
       this.infoWindow.open(this.map, this.marker);
    });
    this.setState({  map: this.map, marker: this.marker })
  }


  loadSDK(){
    return new Promise((resolve, reject) => {
      const src = `https://maps.googleapis.com/maps/api/js?key=${Config.googleMapKey}&libraries=places&v=3.31&language=en`,
            body = document.getElementsByTagName('body')[0],
            tag  = document.createElement('script');
            tag.type = 'text/javascript';
            tag.async = false; // Load in order
            tag.src = src;
            tag.onload = (res)=> resolve(res);
            tag.onerror = () => (err) => reject(err);
            body.appendChild(tag);
    })
  }

  render() {
    return (
      <div id="map-canvas" ref={el => { el ? this.mapElement = el : null}}></div>
    );
  }
}

export default GoogleMap;