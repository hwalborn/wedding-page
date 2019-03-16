import React from 'react'
import { Row, Col, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <div>
        <Row className="header">
          <Col md={{span:6, offset:3}}>
            <Link id="header-title" to="/">Holt & Sara</Link>
          </Col>
        </Row>
      </div>
    )
}

export default Header
