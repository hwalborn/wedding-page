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
        modalInfo: {}
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
    }

    stateDataCallback = (data) => {
      var values = {}
      data.valueRanges[0].values.forEach((value) => {
        // lat is the first column, lng is the second column, the name of
        // the marker is the third column, and description is the fourth
        values[value[2]] = [value[0], value[1], value[3]]
      })
      return values
    }

    handleClick = (e) => {
      var text = e.target.innerText
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
        Object.keys(this.state.aboutValues).map((key, index) => {
            return <MapMarker key={index}
                              lat={this.state.aboutValues[key][0]}
                              lng={this.state.aboutValues[key][1]}
                              text={key}
                              handleClick={this.handleClick} />
        })
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
            <AboutModal modalInfo={this.state.modalInfo}
                        showModal={this.state.showModal}
                        handleClose={this.handleClose} />
          </div>
        </div>
      )
    }
}

export default AboutBethlehem
