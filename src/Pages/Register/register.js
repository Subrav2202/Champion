import React, { useState } from "react";
import "./regStyle.scss";
import lock from "./lock.png";
import champion from "./champ.jpg";
import { useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { eye, eyeSlash } from "../constant";

function Register() {
  const history = useHistory();
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
    role: "",
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
    setRegisterValues((registerValues) => {
      return {
        ...registerValues,
        [e.target.name]: value,
      };
    });
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setRegisterValues((registerValues) => {
      return {
        ...registerValues,
        image:file.name,
      }});
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert("Registered!!");
    localStorage.setItem("user", JSON.stringify(registerValues));
    history.push("profile");
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked ? "checked" : "unchecked");
  };

  const togglePassword = () => {
    setPasswordShow(passwordShow ? false : true);
  };


  console.log(registerValues);
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
                      type={passwordShow ? "text" : "password"}
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
                  <Button
                    variant="outline-info"
                    onClick={() => setisregistered(!isregistered)}
                  >
                    register here !!
                  </Button>
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
                    maxLength={10}
                    value={registerValues.phone}
                    type="number"
                    placeholder="Enter Phone Number"
                    onChange={handleRegister}
                  />
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.File onChange={handleFile} />
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Control
                    name="role"
                    as="select"
                    custom
                    onChange={handleRegister}
                  >
                    <option value="Select">Select</option>
                    <option value="CTO">CTO</option>
                    <option value="Director">Director</option>
                    <option value="Team Lead">Team Lead</option>
                    <option value="Associate Team Lead">
                      Associate Team Lead
                    </option>
                    <option value="Mentor">Mentor</option>
                    <option value="Developer">Developer</option>
                  </Form.Control>
                </Form.Group>
                <hr />
                <div className="footer">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button
                    variant="outline-info"
                    onClick={() => setisregistered(!isregistered)}
                  >
                    already register !!
                  </Button>
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
