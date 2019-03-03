import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Row } from 'react-bootstrap'

import api from '../data/apiKey'
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
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/14OsbtSgGtA911j16Y_QjX6P_etYEJ4sahge0iQn8mcw/values:batchGet?key=${api.apiKey}&ranges=Sheet1&majorDimension=ROWS`)
    .then((resp) => {
      resp.json()
      .then((data) => {
        var valueObjects = {}
        data.valueRanges[0].values.forEach((value) => {
          valueObjects[value[0]] = [value[1], value[2]]
        })
        this.setState(() => {
          return {
            sheetLoaded: true,
            aboutValues: valueObjects
          }
        })
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
    let filename = image.split('/')[image.split('/').length - 1];
    return <div><img src={image} key={index}/><p className="legend">{filename}</p></div>
  })

    return (
      <div>
        <Carousel infiniteLoop={true} autoPlay={true} >
            {carouselImages}
        </Carousel>
        <Row>
          {aboutSections}
        </Row>
      </div>
    )
  }
}

export default Main
