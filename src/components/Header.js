import React from 'react'
import { Row, Col, DropdownButton, Dropdown, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <div>
        <Row className="header" style={{margin: 0}}>
          <Col md={{span:6, offset:3}}>
            <Link id="header-title" to="/">Holt & Sara</Link>
          </Col>
          <Col md={3}>
            <ButtonToolbar>
              <DropdownButton id="drop" title="Explore" key={1} noCaret>
                <Dropdown.Item
                  eventKey="1"
                  className="dropItem">
                    <Link style={{fontSize: '1em'}} to="/bethlehem" id="drop-link">
                        About Bethlehem
                    </Link>
                </Dropdown.Item>
              </DropdownButton>
            </ButtonToolbar>
          </Col>
        </Row>
      </div>
    )
}

export default Header
