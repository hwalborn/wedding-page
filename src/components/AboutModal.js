import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const AboutModal = ({modalInfo, showModal, handleClose}) => {
    return (
      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalInfo.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modalInfo.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default AboutModal
