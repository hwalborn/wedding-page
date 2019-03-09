import React from 'react'
import { Col, Row } from 'react-bootstrap'

import dataAccess from '../data/dataAccess'
import '../style/Bethlehem.css';
import AboutSection from './AboutSection'

class AboutBethlehem extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        sheetLoaded: false,
        aboutValues: {}
      }
    }

    componentDidMount() {
      if(this.state.sheetLoaded){
        return;
      }
      var sheetData = dataAccess.googleSheets('sheet2').then((data) =>{
        this.setState({
          sheetLoaded: true,
          aboutValues: data
        })
      })
    }

    render(){

      // create the aboutSections based on what's in the sheet
      let aboutSections = this.state.sheetLoaded ?
        Object.keys(this.state.aboutValues).map((key, index) => <AboutSection key={index} title={this.state.aboutValues[key][1]} desc={this.state.aboutValues[key][0]} />)
        : null

      return (
        <div id="about-bethlehem">
          <h1>About Bethlehem</h1>
          <Row>
            {aboutSections}
          </Row>
        </div>
      )
    }
}

export default AboutBethlehem
