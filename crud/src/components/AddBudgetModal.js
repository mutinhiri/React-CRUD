import React from 'react'
import { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef()
  const maxRef = useRef()
  
  function hanldeSubmit(e){}
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit ={hanldeSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            New Budget
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId='name' className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' required></Form.Control>
          </Form.Group>
          <Form.Group controlId='max' className='mb-3'>
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control type='number' required min={0} step={0.01} ></Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant='primary' type='submit'>Add</Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}
