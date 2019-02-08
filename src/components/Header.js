import React from 'react'
import { Row, Col, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const style={
  border: 'none',
  backgroundColor: "grey",
  fontFamily: "Cinzel"
}

const Header = () => {
    return (
      <div>
        <Row className="header" style={{margin: 0}}>
          <Col md={12}>
            <Link to="/">Holt & Sara</Link>
          </Col>
        </Row>
        <Row id="scroll-strip" />
      </div>
    )
}

export default Header
