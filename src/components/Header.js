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
          <Col md={{span:6, offset:3}}>
            <Link id="header-title" to="/">Holt & Sara</Link>
          </Col>
          {/*<Col md={3}>
            <ButtonToolbar>
              <DropdownButton id="drop" title="Explore" key={1} noCaret style={style}>
                <Dropdown.Item eventKey="1" className="dropItem"><Link style={{fontSize: '1em', paddingLeft: 0}} to="/resumes/technical">Technical</Link></Dropdown.Item>
                <Dropdown.Item eventKey="2" className="dropItem"><Link style={{fontSize: '1em', paddingLeft: 0}} to="/resumes/dance">Dance</Link></Dropdown.Item>
              </DropdownButton>
            </ButtonToolbar>
          </Col>*/}
        </Row>
      </div>
    )
}

export default Header
