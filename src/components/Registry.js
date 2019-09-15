import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import '../style/Registry.css';

const Registry = () => {
    return (
      <div>
        <Row>
          <Col md={6} className="registry-container">
            <a id="bed-bath-beyond" _target="blank" href="https://www.bedbathandbeyond.com/store/giftRegistry/viewRegistryOwner/myItems/548048029" />
          </Col>
          <Col md={6} className="registry-container">
            <a id="west-elm" _target="blank" href="https://www.westelm.com/registry/mzzgfl7dgz/registry-list.html" />
          </Col>
        </Row>
      </div>
    )
}

export default Registry
