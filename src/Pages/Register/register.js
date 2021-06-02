import React, { useState } from "react";
import "./regStyle.scss";
import lock from "../../Assets/lock.png";
import champion from "../../Assets/champ.jpg";
import { useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import validate from './validate'
import LoginForm from './loginForm'

function Register() {
  const history=useHistory()
  const [isregistered, setisregistered] = useState(true);
  const [registerError,setRegisterError] = useState({})
  
  const [registerValues, setRegisterValues] = useState({
    fullname: "",
    registeremail: "",
    phone: "",
    image: "",
    role: "",
  });
//   console.log(error.length)
  

  const handleRegister = (e) => {
    const value = e.target.value;
    setRegisterValues((registerValues) => {
      return {
        ...registerValues,
        [e.target.name]: value,
      };
    });
  };
  const handleFile=(e)=>{
    // const file = e.target.files[0]
    console.log(e.target.files[0].name)
  }
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
      setRegisterError(validate(registerValues, isregistered))
    //   if (Object.keys(registerError).length === 0) {
          localStorage.setItem("user", JSON.stringify(registerValues))
          history.push("/profile")
    //   }
  };


//   console.log(registerValues);
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
              <LoginForm setisregister={() => setisregistered(!isregistered)} isregistered={isregistered}/>
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
                {registerError.fullname && <small className="error-tag">{registerError.fullname}</small>}
                <br />
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="registeremail"
                    value={registerValues.registeremail}
                    type="email"
                    placeholder="Enter email"
                    onChange={handleRegister}
                  />
                </Form.Group>
                {registerError.registeremail && <small className="error-tag">{registerError.registeremail}</small>}
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
                {registerError.phone && <small className="error-tag">{registerError.phone}</small>}
                <br />
                <Form.Group>
                  <Form.File
                    onChange={handleFile}
                    type="file"
                    accept="image/png, image/jpeg"
                    // required
                  />
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
