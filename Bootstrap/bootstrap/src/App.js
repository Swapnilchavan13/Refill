import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import { Button, Stack } from 'react-bootstrap';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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

    <Container>
      <Row>
        <Col>
        <img width="260px" src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*9FHUQLGxb-H9qnZnXPDESA.png' />
        </Col>
        <Col>
        <img width="260px" src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*9FHUQLGxb-H9qnZnXPDESA.png' />
        </Col>
        <Col>
        <img width="260px" src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*9FHUQLGxb-H9qnZnXPDESA.png' />
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  </div>
  );
}

export default App;
