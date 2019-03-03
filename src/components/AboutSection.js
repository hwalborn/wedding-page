import React from 'react'
import { Col } from 'react-bootstrap'

import '../style/About.css';

const AboutSection = ({title, desc}) => {
    return (
      <Col id="about-container" md={{span:8, offset:2}}>
        <div>
          <div id="about-title-container">
            <h5 id="about-title">{title}</h5>
          </div>
          <div id="about-description-container">
            <p id="about-description">{desc}</p>
          </div>
        </div>
      </Col>
    )
}

export default AboutSection
