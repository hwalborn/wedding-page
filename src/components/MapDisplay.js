import React from 'react'
import GoogleMapReact from 'google-map-react';

import MapMarker from './MapMarker'
import AboutModal from './AboutModal'
import api from '../data/apiKey'
import '../style/MapDisplay.css';

class MapDisplay extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        aboutValues: props.aboutValues,
        showModal: false,
        onlyMains: props.onlyMains,
        modalInfo: {},
        zoom: 13,
        positionClass: props.positionClass,
        center: {
          lat: 40.6259,
          lng: -75.3705
        }
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleClose = this.handleClose.bind(this)
    }

    handleClick = (e) => {
      // we set the data-name attribute on the marker because some markers
      // have text and others don't, this way we can grab desc, etc.
      var text = e.target.attributes["data-name"].value
      var info = this.state.aboutValues[text]
      this.setState({
        showModal: true,
        modalInfo: {
          title: text,
          description: info[2]
        }
      })
    }

    handleClose = () => {
      this.setState({
        showModal: false,
        modalInfo: {}
      })
    }

    render(){

      // create the markers based on what's in the sheet
      let markers = Object.keys(this.state.aboutValues).map((key, index) => {
            let value = this.state.aboutValues[key]
            let isMain = value[3];
            if(this.state.onlyMains && !isMain){
                return;
            }
            return <MapMarker key={index}
                              lat={value[0]}
                              lng={value[1]}
                              text={key}
                              handleClick={this.handleClick}
                              isMain={value[3]} />
        })
        let mapsDefaultInfo = {
          center: this.state.center,
          zoom: this.state.zoom
        };
      return (
          <div className={this.state.positionClass} id="map-container">
            <GoogleMapReact
              defaultCenter={mapsDefaultInfo.center}
              defaultZoom={mapsDefaultInfo.zoom}
              bootstrapURLKeys={{
                key: api.mapsApiKey,
              }}>
              {markers}
            </GoogleMapReact>
            <AboutModal modalInfo={this.state.modalInfo}
                        showModal={this.state.showModal}
                        handleClose={this.handleClose} />
          </div>
      )
    }
}

export default MapDisplay
