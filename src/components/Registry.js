import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'

import '../style/Registry.css';
import bedBathBeyond from '../images/BedBathBeyond.png';
import westElm from '../images/WestElm.png';

const Registry = () => {
    let calculatedWidth = () => {
      if(window.innerWidth < 1000){
        return 12;
      }
      return 6;
    }
    return (
      <div>
        <Row className="registry-row">
          <Col md={calculatedWidth()} className="registry-container">
            <div className="inner-registry-container">
              <div className="image-container">
                <img id="bed-bath-beyond" src={bedBathBeyond}/>
              </div>
              <Button target="_blank" href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/548048029" variant="outline-info">Browse Bed Bath & Beyond</Button>
            </div>
          </Col>
          <Col md={calculatedWidth()} className="registry-container">
            <div className="inner-registry-container">
              <div className="image-container">
                <img id="west-elm" src={westElm}/>
              </div>
              <Button target="_blank" href="https://www.westelm.com/registry/mzzgfl7dgz/registry-list.html" variant="outline-info">Browse West Elm</Button>
            </div>
          </Col>
        </Row>
      </div>
    )
}

export default Registry
