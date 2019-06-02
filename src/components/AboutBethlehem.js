import React from 'react'
import '../style/Bethlehem.css';
import MapDisplay from './MapDisplay'

class AboutBethlehem extends React.Component {
    render(){
      return (
        <div id="about-bethlehem">
          <MapDisplay onlyMains={false} />
        </div>
      )
    }
}

export default AboutBethlehem