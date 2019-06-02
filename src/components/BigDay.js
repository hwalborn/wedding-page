import React from 'react'
import '../style/Bethlehem.css';
import MapDisplay from './MapDisplay'

class BigDay extends React.Component {
    render(){
      return (
        <div id="about-bethlehem">
          <MapDisplay onlyMains={true} />
        </div>
      )
    }
}

export default BigDay