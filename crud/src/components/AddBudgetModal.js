import React from 'react'
import { Form, Modal } from 'react-bootstrap'

export default function AddBudgetModal({show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit ={hanldeSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            New Budget
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name</Form.Label>
          </Form.Group>
        </Modal.Body>
      </Form>
    </Modal>
  )
}
