import React from 'react'
import { Col, Row } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react';

import dataAccess from '../data/dataAccess'
import '../style/Bethlehem.css';
import MapMarker from './MapMarker'
import api from '../data/apiKey'

class AboutBethlehem extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        sheetLoaded: false,
        aboutValues: []
      }
    }

    componentDidMount() {
      if(this.state.sheetLoaded){
        return;
      }
      var sheetData = dataAccess.googleSheets('sheet5', this.stateDataCallback).then((data) =>{
        this.setState({
          sheetLoaded: true,
          aboutValues: data
        })
      })
    }

    stateDataCallback = (data) => {
      var markerDataArray = []
      data.valueRanges[0].values.forEach((value) => {
        markerDataArray.push({
          lat: value[0],
          lng: value[1],
          text: value[2]
        })
      })
      return markerDataArray
    }

    mapsDefaultInfo = {
      center: {
        lat: 40.6259,
        lng: -75.3705
      },
      zoom: 13
    };

    render(){

      // create the markers based on what's in the sheet
      let markers = this.state.sheetLoaded ?
        this.state.aboutValues.map((value, index) => <MapMarker key={index} lat={value.lat} lng={value.lng} text={value.text} />)
        : null

      return (
        <div id="about-bethlehem">
          <div id="map-container">
            <GoogleMapReact
              defaultCenter={this.mapsDefaultInfo.center}
              defaultZoom={this.mapsDefaultInfo.zoom}
              bootstrapURLKeys={{
                key: api.mapsApiKey,
              }}>
              {markers}
            </GoogleMapReact>
          </div>
        </div>
      )
    }
}

export default AboutBethlehem
