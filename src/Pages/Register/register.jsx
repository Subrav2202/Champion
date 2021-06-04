import React, { useState } from "react";
import "./regStyle.scss";
import champion from "../../Assets/champ.jpg";
import {
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from './loginForm'
import RegisterForm from './registerForm'

function Register() {
  const [isregistered, setisregistered] = useState(true);
  return (
    <Container fluid>
      <Row style={{ width: "100%" }}>
        <Col md={6} className="colwrapper">
          <Card className="champwrapper">
            <Card.Img variant="top" className="champs" src={champion} />
            <Card.Body>
              <Card.Text className="champbody">
                A champion is someone who gets up when he can't.
              </Card.Text>
              <br />
              <Link to="">Employee portal !! </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="colwrapper">
          {isregistered ? (
            <LoginForm setisregister={() => setisregistered(!isregistered)} isregistered={isregistered} />
          ) : (
            <RegisterForm setisregister={() => setisregistered(!isregistered)} isregistered={isregistered} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
