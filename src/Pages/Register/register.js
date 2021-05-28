import React, { useState } from "react";
import "./regstyle.scss";
import lock from "./lock.png";
import champion from "./champ.jpg"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const [isregistered, setisregistered] = useState(true);

  return (
    <Container fluid className="wrapper">
      <Row>
        <Col md={6} className="colwrapper">
          <Card className="champwrapper">
            <Card.Img variant="top" className="champs" src={champion}/>
            <Card.Body>
              <Card.Text className="champbody">
              A champion is someone who gets up when he can't.
              </Card.Text>
              <br/>
              <Link to="">Employee portal !! </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="colwrapper">
          {isregistered ? (
            <div className="formwrapper">
              <div className="icon">
                <img
                  src={lock}
                  alt="lock"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <hr />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remeber Me !!" />
                </Form.Group>
                <br></br>
                <hr />
                <div className="footer">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Link onClick={() => setisregistered(!isregistered)}>
                    register here !!
                  </Link>
                </div>
              </Form>
            </div>
          ) : (
            <div className="formwrapper">
              <div className="icon">
                <img
                  src={lock}
                  alt="lock"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <hr />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Co</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <hr />
                <div className="footer">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Link onClick={() => setisregistered(!isregistered)}>
                    already register !!
                  </Link>
                </div>
              </Form>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
