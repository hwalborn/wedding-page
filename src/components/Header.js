import React from 'react'
import { Row, Col, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Headroom from 'react-headroom'

const Header = () => {
    return (
      <Headroom>
        <Row className="header">
          <Col md={12}>
            <Link id="header-title" to="/">Holt & Sara</Link>
          </Col>
        </Row>
      </Headroom>
    )
}

export default Header
