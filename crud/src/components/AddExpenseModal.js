import React from 'react'
import { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useBudgets } from './contexts/BudgetsContext'

export default function AddExpenseModal({ show, handleClose , defaultBudgetId}) {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()
  const {addExpense, budgets} = useBudgets()

  function hanldeSubmit(e) {
    e.preventDefault()
    addExpense(
    {
      descriptionRef: descriptionRef.current.value,
      max: parseFloat(maxRef.current.value)
      })
    handleClose()
   
  }
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
            <Form.Control ref={maxRef} type='number' required min={0} step={0.01} ></Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant='primary' type='submit'>Add</Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}
