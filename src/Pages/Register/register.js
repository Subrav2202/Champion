import React, { useState } from "react";
import "./regStyle.scss";
import lock from "./lock.png";
import champion from "./champ.jpg";
import { Container, Row, Col, Form, Button, Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { eye, eyeSlash } from "../constant";

function Register() {
  const [isregistered, setisregistered] = useState(true);
  const [rememberMe, setRememberMe] = useState("unchecked");
  const [passwordShow, setPasswordShow] = useState(false);
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
    rememberme: "",
  });
  const [registerValues, setRegisterValues] = useState({
    fullname: "",
    email: "",
    phone: "",
    image: "",
    role: ""
  });

  const handleLogin = (e) => {
    const value = e.target.value;
    setLoginValues({
      ...loginValues,
      [e.target.name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Logged In");
  };

  const handleRegister = (e) => {
    const value = e.target.value;
    setRegisterValues({
      ...registerValues,
      [e.target.name]: value
    });
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert("Registered!!");
    console.log(registerValues)
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked ? "checked" : "unchecked");
  };

  const togglePassword = () => {
    setPasswordShow(passwordShow ? false : true);
  };

  const upload = (e) => {
    setRegisterValues((val) => {
      // console.log(val)
    })
  }

  console.log(registerValues)
    return (
        <Container fluid>
            <Row style={{width: "100%"}}>
                <Col md={6} className="colwrapper">
                    <Card className="champwrapper">
                        <Card.Img
                            variant="top"
                            className="champs"
                            src={champion}
                        />
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
                                    <Form.Control
                                        name="email"
                                        value={loginValues.email}
                                        type="email"
                                        placeholder="Enter email"
                                        onChange={handleLogin}
                                    />
                                </Form.Group>
                                <br></br>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <div className="pass-wrapper">
                                        <Form.Control
                                            name="password"
                                            value={loginValues.password}
                                            type={
                                                passwordShow
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Password"
                                            onChange={handleLogin}
                                        />
                                        <i onClick={togglePassword}>
                                            {passwordShow ? eye : eyeSlash}
                                        </i>
                                    </div>
                                </Form.Group>
                                <br></br>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check
                                        name="rememberme"
                                        type="checkbox"
                                        label="Remember Me !!"
                                        onChange={handleRememberMe}
                                    />
                                </Form.Group>
                                <br></br>
                                <hr />
                                <div className="footer">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <Link
                                        onClick={() =>
                                            setisregistered(!isregistered)
                                        }
                                    >
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

                            <Form onSubmit={handleRegisterSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        name="fullname"
                                        value={registerValues.fullname}
                                        type="text"
                                        placeholder="Enter Full Name"
                                        onChange={handleRegister}
                                    />
                                </Form.Group>
                                <br />
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        value={registerValues.email}
                                        type="email"
                                        placeholder="Enter email"
                                        onChange={handleRegister}
                                    />
                                </Form.Group>
                                <br />
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        maxLength= {10}
                                        value={registerValues.phone}
                                        type="number"
                                        placeholder="Enter Phone Number"
                                        onChange={handleRegister}
                                    />
                                </Form.Group>
                                <br />
                                
                                <Form.Group>
                                    <Form.File name="image" value={registerValues.image} placeholder="Upload Image" onChange={handleRegister}/>
                                </Form.Group>
                                  
                                <br/>
                                <Dropdown onSelect={upload}>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Select Department
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey="Admin">
                                            Admin
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="CTO">
                                            CTO
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Director">
                                            Director
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Delivery Manager">
                                            Delivery Manager
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Team Lead">
                                            Team Lead
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Associate Team Lead">
                                            Associate Team Lead
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="Mentor">
                                            Mentor
                                        </Dropdown.Item >
                                        <Dropdown.Item eventKey="Developer">
                                            Developer
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <hr />
                                <div className="footer">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <Link
                                        onClick={() =>
                                            setisregistered(!isregistered)
                                        }
                                    >
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
