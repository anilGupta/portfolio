import React, { Component } from 'react';
import Config from '../constants/Config'
import ScriptCache from '../utils/scriptCache';
import GoogleApi from '../utils/googleApi';
class GoogleMap extends Component{

  constructor(props){
    super(props);
    this.mapElement = null;
    this.mapInstance = null;
    this.styles   = [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}];
  }

  defaultProps = {
    height       : '100%',
    width        : '100%',
    lat          : 40.674,
    lng          : -73.945,
    zoom         : 14,
    scroll       : false
  };

  componentWillMount(){
     this.loadSDK();
  }

  componentDidMount() {
    const { lat, lng } = this.props;
    this.scriptCache.google.onLoad((err, tag) => {
      console.log("on loaded");
      const maps = window.google.maps;
      const props = Object.assign({}, this.props, {
        loaded: this.state.loaded
      });

      let center = new maps.LatLng(lat, lng);
      let mapConfig = Object.assign({}, {
        center, zoom: this.props.zoom
      });

      this.map = new maps.Map(this.mapElement, mapConfig);
      this.setState({
        loaded: true,
        map: this.map,
        google: window.google
      })
    });
  }

  loadSDK(){
    const  handleResult = (state) => {
      return evt => {
        let stored = scriptMap.get(key);
        if (state === 'loaded') {
          stored.resolved = true;
          resolve(src);
        } else if (state === 'error') {
          stored.errored = true;
          reject(evt)
        }
        stored.loaded = true;
        cleanup();
      }
    };
    return  promise = new Promise((resolve, reject) => {
       const body = document.getElementsByTagName('body')[0],
             tag  = document.createElement('script');
             tag.type = 'text/javascript';
             tag.async = false; // Load in order
             tag.onload = ()=>('loaded');
              tag.onerror = handleResult('error')
              tag.onreadystatechange = () => {
                handleResult(tag.readyState)
              }
    }


    ScriptCache({
      google: GoogleApi({
        apiKey: Config.googleMapKey,
        language: 'en',
        libraries: ['places'],
        version: version,
      })
    })
  }

  render() {
    return (
      <div id="map-canvas" ref={el => { el ? this.mapElement = el : null}}></div>
    );
  }
}

export default GoogleMap;