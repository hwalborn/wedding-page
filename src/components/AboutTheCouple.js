import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import dataAccess from '../data/dataAccess'
import '../style/AboutTheCouple.css';
import saraImage from '../images/sara.jpg'
import holtImage from '../images/holt.jpeg'
import AboutCoupleSection from './AboutCoupleSection'

class AboutTheCouple extends React.Component {
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
      var sheetData = dataAccess.googleSheets('sheet1').then((data) =>{
        this.setState({
          sheetLoaded: true,
          aboutValues: data
        })
      })
    }

    render(){
      return (
        <div id="about-the-couple">
          {
            !this.state.sheetLoaded ? null :
            <Container id="about-couple-container">
              <Row id="couple-about">
                <AboutCoupleSection title={this.state.aboutValues["AboutCouple"][1]}
                                    desc={this.state.aboutValues["AboutCouple"][0]}
                                    fade={"zoom-out-up"}
                                    width={12} />
              </Row>
              <Row className="about-container">
                <AboutCoupleSection title={this.state.aboutValues["AboutSara"][1]}
                                      desc={this.state.aboutValues["AboutSara"][0]}
                                      fade={"fade-right"}
                                      width={6}
                                      anchorPlacement={"bottom-bottom"} />
                <Col className="about-container" data-aos="fade-left" md={6} data-aos-anchor-placement="bottom-bottom">
                  <img className="about-image"  src={saraImage} />
                </Col>
              </Row>
              <Row id="bottom-row" className="about-container">
                <Col className="about-container" data-aos="fade-right" md={6} data-aos-anchor-placement="bottom-bottom">
                  <img className="about-image"  src={holtImage} />
                </Col>
                <AboutCoupleSection title={this.state.aboutValues["AboutHolt"][1]}
                                    desc={this.state.aboutValues["AboutHolt"][0]}
                                    fade={"fade-left"}
                                    width={6}
                                    anchorPlacement={"bottom-bottom"}/>
              </Row>
            </Container>
          }
        </div>
      )
    }
}

export default AboutTheCouple