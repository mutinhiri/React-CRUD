import Container from 'react-bootstrap/Container'
import { Button, Stack } from 'react-bootstrap'
import Budgetcard from './components/Budgetcard';

function App() {
  return (
    <div className="App">
     <Container className='my-4'>
        <Stack direction='horizontal' gap="2" className="mb-4" >
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary'>Add budget</Button>
          <Button variant='outline-primary'>Add expense</Button>
        </Stack>
        <div className='stacks'>
          <Budgetcard name="Entertainment" amount={300} max={800} />
        </div>
      </Container>
     
    </div>
  );
}

export default App;
