import React from 'react'
import { Col } from 'react-bootstrap'

import '../style/About.css';

const AboutSection = ({title, desc}) => {
    return (
      <Col className="about-container" md={{span:8, offset:2}}>
        <div className="inner-about-container">
          <div className="about-title-container">
            <h5 className="about-title">{title}</h5>
          </div>
          <div className="about-description-container">
            <p className="about-description">{desc}</p>
          </div>
        </div>
      </Col>
    )
}

export default AboutSection
