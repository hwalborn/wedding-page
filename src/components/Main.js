import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import api from '../data/apiKey'

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
          valueObjects[value[0]] = value[1]
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

  let images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  let textData = this.state.sheetLoaded ? <h1>{this.state.aboutValues.AboutSara}</h1> : null
  let carouselImages = images.map((image, index) => {
    return <div><img src={image} key={index}/><p className="legend">TEST</p></div>
  })

    return (
      <div>
        {textData}
        <Carousel infiniteLoop={true} autoPlay={true} >
            {carouselImages}
        </Carousel>
      </div>
    )
  }
}

export default Main
