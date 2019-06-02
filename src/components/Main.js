import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Row, Col, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import dataAccess from '../data/dataAccess'
import AboutSection from './AboutSection'

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      sheetLoaded: false,
      aboutValues: {},
      linkContainerWidth: 4
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

    if(window.innerWidth < 1000 && this.state.linkContainerWidth < 12){
      this.setState({
        linkContainerWidth: 12
      })
    }
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
        <Col md={this.state.linkContainerWidth} sm={12}>
          <ul>
            <li className="link-item fade-in">
              <Link to="/aboutTheCouple" className="drop-link">
                  About the Couple
              </Link>
            </li>
            <li className="link-item fade-in">
              <Link to="/bigDay" className="drop-link">
                  The Big Day
              </Link>
            </li>
            <li className="link-item fade-in">
              <Link to="/bethlehem" className="drop-link">
                  About Bethlehem
              </Link>
            </li>
            <li className="link-item fade-in">
              <Link to="/registry" className="drop-link">
                  Registry
              </Link>
            </li>
          </ul>
        </Col>
        <Col md={8} sm={12}>
          <Carousel infiniteLoop={true} autoPlay={true} >
              {carouselImages}
          </Carousel>
        </Col>
      </Row>
      </div>
    )
  }
}

export default Main
