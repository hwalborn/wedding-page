import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Row, Col, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap'

import dataAccess from '../data/dataAccess'
import AboutSection from './AboutSection'

class Main extends React.Component {
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
  let importAll = (r) => {
    return r.keys().map(r);
  }
  // create the aboutSections based on what's in the sheet
  let aboutSections = this.state.sheetLoaded ?
    Object.keys(this.state.aboutValues).map((key, index) => <AboutSection key={index} title={this.state.aboutValues[key][1]} desc={this.state.aboutValues[key][0]} />)
    : null

  // grab list of images from directory
  let images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  // add all the images to the carousel
  let carouselImages = images.map((image, index) => {
    // clean the file name...
    let filename = image.split('/')[image.split('/').length - 1].split('.')[0];
    return <div><img src={image} key={index}/><p className="legend">{filename}</p></div>
  })

    return (
      <div>
      <Row>
        <Col md={4}>
        </Col>
        <Col md={8}>
          <Carousel infiniteLoop={true} autoPlay={true} >
              {carouselImages}
          </Carousel>
        </Col>
      </Row>
        <Row>
          {aboutSections}
        </Row>
      </div>
    )
  }
}

export default Main
