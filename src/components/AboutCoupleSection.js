import React from 'react'
import { Col } from 'react-bootstrap'

const AboutCoupleSection = ({title, desc, fade, width, anchorPlacement}) => {
  let anchor = anchorPlacement ? anchorPlacement : null
    return (
      <Col data-aos={fade} className="about-container" md={width} data-aos-anchor-placement={anchor}>
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

export default AboutCoupleSection
