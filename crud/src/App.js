import Container from 'react-bootstrap/Container'
import { Button, Stack } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
     <Container>
        <Stack direction='horizontal' gap="2" className="mb-4" >
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary'>Add budget</Button>
          <Button variant='outline-primary'>Add expense</Button>
        </Stack>
      </Container>
     
    </div>
  );
}

export default App;
