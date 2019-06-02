import React from 'react'

import '../style/Bethlehem.css';
import MapDisplay from './MapDisplay'
import dataAccess from '../data/dataAccess'
import LocationContainer from './LocationContainer'

class AboutBethlehem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sheetLoaded: false,
      aboutValues: props.aboutValues
    }
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
      values[value[2]] = [parseFloat(value[0]), parseFloat(value[1]), value[3], value[4] === "TRUE"]
    })
    return values
  }
    render(){
      if(!this.state.sheetLoaded){
        return <div class="about-bethlehem"></div>
      } else {
        return (
          <div id="about-bethlehem">
            <LocationContainer positionClass={"pull-left"} />
            <MapDisplay onlyMains={false} 
                        aboutValues={this.state.aboutValues} 
                        positionClass={"pull-right"}/>
          </div>
        )
      }
    }
}

export default AboutBethlehem