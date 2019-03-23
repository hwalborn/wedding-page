import React from 'react'
import { Col, Row, Modal, Button } from 'react-bootstrap'
import GoogleMapReact from 'google-map-react';

import dataAccess from '../data/dataAccess'
import '../style/Bethlehem.css';
import MapMarker from './MapMarker'
import AboutModal from './AboutModal'
import api from '../data/apiKey'

class AboutBethlehem extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        sheetLoaded: false,
        aboutValues: {},
        showModal: false,
        modalInfo: {},
        zoom: 13,
        center: {
          lat: 40.6259,
          lng: -75.3705
        }
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleClose = this.handleClose.bind(this)
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
      if(window.innerWidth < 1000 && this.state.zoom >= 13){
        this.setState({
          zoom: 17,
          center: {
            lat: 40.62,
            lng: -75.3825
          }
        })
      }
    }

    stateDataCallback = (data) => {
      var values = {}
      data.valueRanges[0].values.forEach((value) => {
        // lat is the first column, lng is the second column, the name of
        // the marker is the third column, description is the fourth,
        // and the fifth column is whether or not it's a main marker
        values[value[2]] = [parseFloat(value[0]), parseFloat(value[1]), value[3], value[4] === "TRUE"]
      })
      return values
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
      let markers = this.state.sheetLoaded ?
        Object.keys(this.state.aboutValues).map((key, index) => {
            let value = this.state.aboutValues[key]
            return <MapMarker key={index}
                              lat={value[0]}
                              lng={value[1]}
                              text={key}
                              handleClick={this.handleClick}
                              isMain={value[3]} />
        })
        : null
        let mapsDefaultInfo = {
          center: this.state.center,
          zoom: this.state.zoom
        };
      return (
        <div id="about-bethlehem">
          <div id="map-container">
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
        </div>
      )
    }
}

export default AboutBethlehem
