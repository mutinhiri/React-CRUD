import Container from 'react-bootstrap/Container'
import { Button, Stack } from 'react-bootstrap'
import Budgetcard from './components/Budgetcard';
import AddBudgetModal from './components/AddBudgetModal';
import { useState } from 'react';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal ] = useState(false)
  return (
    <div className="App">
     <Container className='my-4'>
        <Stack direction='horizontal' gap="3" className="mb-4" >
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary' onClick={() =>setShowAddBudgetModal(true)}>Add budget</Button>
          <Button variant='outline-primary'>Add expense</Button>
        </Stack>
        <div className='stacks'>
          <Budgetcard gray name="Entertainment" amount={300} max={200} />
        </div>
      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
     
    </div>
  );
}

export default App;
