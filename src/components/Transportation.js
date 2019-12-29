import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import dataAccess from '../data/dataAccess'
import '../style/About.css';
import AboutSection from './AboutSection'

class Transportation extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        sheetLoaded: false,
        aboutValues: {},
        aboutContainerWidth: 6
      }
    }

    componentDidMount() {
      if(this.state.sheetLoaded){
        return;
      }
      var sheetData = dataAccess.googleSheets('sheet6').then((data) =>{
        this.setState({
          sheetLoaded: true,
          aboutValues: data
        })
      })

      if(window.innerWidth < 1000 && this.state.aboutContainerWidth < 12){
        this.setState({
          aboutContainerWidth: 12
        })
      }
    }

    render(){
      // create the aboutSections based on what's in the sheet
      let aboutSections = this.state.sheetLoaded ?
        Object.keys(this.state.aboutValues).map((key, index) =>
          <div style={{marginBottom: 45}}>
            <div className="inner-about-container">
              <div className="about-title-container">
                <h5 className="about-title">{key}</h5>
              </div>
              <div className="about-description-container">
                <p className="about-description">{this.state.aboutValues[key][0]}</p>
              </div>
            </div>
          </div>)
        : null
      return (
        <div id="about-the-couple">
          {
            !this.state.sheetLoaded ? null :
            <Container id="about-couple-container">
              <Row>
                {aboutSections}
              </Row>
            </Container>
          }
        </div>
      )
    }
}

export default Transportation
