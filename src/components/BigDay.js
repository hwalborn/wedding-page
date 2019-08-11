import React from 'react'

import '../style/Bethlehem.css';
import MapDisplay from './MapDisplay'
import LocationContainer from './LocationContainer'
import dataAccess from '../data/dataAccess'

class BigDay extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sheetLoaded: false,
      aboutValues: props.aboutValues,
      zoom: 13,
      center: {
        lat: 40.6259,
        lng: -75.3705
      }
    }
    this.handleLocationClick = this.handleLocationClick.bind(this);
  }

  handleLocationClick = (e) => {
    e.preventDefault();
    // we set the item-key attribute to be the value we need
    let stateKey = e.target.attributes["item-key"].value;
    var selectedLocation = this.state.aboutValues[stateKey];
    this.setState({
      center: {
        lat: selectedLocation[0],
        lng: selectedLocation[1]
      },
      zoom: 15
    })
  }
  
  componentDidMount() {
    if(this.state.sheetLoaded){
      return;
    }
    dataAccess.googleSheets('sheet5', this.stateDataCallback).then((data) =>{
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
      values[value[2]] = [parseFloat(value[0]), parseFloat(value[1]), value[3], value[4] === "TRUE", value[5], value[6]]
    })
    return values
  }

  render(){
    if(!this.state.sheetLoaded){
      return <div class="about-bethlehem"></div>
    } else {
      let dataObject = {
        aboutValues: this.state.aboutValues,
        onlyMains: true
      }
      return (
        <div id="about-bethlehem">
          <MapDisplay onlyMains={true} 
                      aboutValues={this.state.aboutValues}
                      positionClass={"pull-left"}
                      zoom={this.state.zoom}
                      center={this.state.center} />
          <LocationContainer positionClass={"pull-right"}
                             aboutValues={this.state.aboutValues}
                             onlyMains={true}
                             handleLocationClick={this.handleLocationClick} />
        </div>
      )
    }
  }
}

export default BigDay