import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import maine from '../images/OceanMaine.jpg'
import sickSara from '../images/SickSara.jpg'

const Main = () => {
  return (
    <div>
    <Carousel infiniteLoop="true" autoPlay="true" >
        <div>
            <img src={maine}/>
            <p className="legend">Maine</p>
        </div>
        <div>
            <img src={sickSara}/>
            <p className="legend">Sara got sea sick</p>
        </div>
    </Carousel>
    </div>
  )
}

export default Main
