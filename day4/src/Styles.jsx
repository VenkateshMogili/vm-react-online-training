import "./style.css";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Styles() {
  const bgStyle={color:'red',backgroundColor:'green',fontSize:50};

  const handleSubmit=()=>{
    alert("Clicked!");
  }
  return (
    <div>
      <i className="fa fa-home"/>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      <Button variant="primary" onClick={handleSubmit}>Primary</Button>
      <Button variant="secondary">Primary</Button>
      <Button variant="warning">Primary</Button>
      <Button variant="info">Primary</Button>

      <br/><br/>
      <h1 style={bgStyle}>Hello</h1>
      <h1 style={bgStyle}>Hello</h1>
      <h1 style={bgStyle}>Hello</h1>
      <h1 style={bgStyle}>Hello</h1>
      <h1 style={bgStyle}>Hello</h1>
      <h1 style={bgStyle}>Hello</h1>
      <h1 className="bg-color text-center">Hello</h1>
    </div>
  )
}

export default Styles;