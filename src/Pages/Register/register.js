import React, { useState } from "react";
import "./regstyle.scss";
import lock from "./lock.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const [isregistered, setisregistered] = useState(true);
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
    rememberme: ""
  })
  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  })

  const handleLogin = (e) => {
    const value = e.target.value;
    setLoginValues({
      ...loginValues,
      [e.target.name]: value,
    })
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    alert("Logged In")
  }

  const handleRegister = (e) => {
    const value = e.target.value;
    setRegisterValues({
      ...registerValues,
      [e.target.name]: value,
    })
  }
  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    alert("Registered!!")
  }

  const checkboxFunc = (e) => {
    console.log(e)
  }
  return (
    <Container fluid className="wrapper">
      <Row>
        <Col md={6}>hello</Col>
        <Col md={6} className="colwrapper">
          {isregistered ? (
            <div className="loginformwarapper">
              <div className="icon">
                <img
                  src={lock}
                  alt="lock"
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <hr />
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" value={loginValues.email} type="email" placeholder="Enter email" onChange={handleLogin} />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" value={loginValues.password} type="password" placeholder="Password" onChange={handleLogin} />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check name="rememberme" type="checkbox" label="Remember Me !!" onChange={handleLogin}/>
                </Form.Group>
                <br></br>
                <hr />
                <div className="footer">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Link onClick={() => setisregistered(!isregistered)}>register here !!</Link>
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
              
              <Form onSubmit={handleRegisterSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" value={registerValues.email} type="email" placeholder="Enter email" onChange={handleRegister} />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" value={registerValues.password} type="password" placeholder="Password" onChange={handleRegister} />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control name="confirmpassword" value={registerValues.confirmpassword} type="password" placeholder="Confirm Password" onChange={handleRegister} />
                </Form.Group>
                <br />
                <Form.Group >
                    <Form.File placeholder="Upload Image" />
                </Form.Group>
                <hr />
                <div className="footer">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Link onClick={() => setisregistered(!isregistered)}>already register !!</Link>
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
