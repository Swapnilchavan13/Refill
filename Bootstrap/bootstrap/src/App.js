import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { Button, Stack } from 'react-bootstrap';
import { useState } from 'react';



function App() {



  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1>Hello I Am Swapnil</h1>
      <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>

  <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>Change this and that and try again.</p>
    </Alert>

    <>
      <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  </div>
  );
}

export default App;
