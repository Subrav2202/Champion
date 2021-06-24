import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import "./regStyle.scss";
import { eye, eyeSlash } from "../constant";
import validate from './validate'
import lock from "../../Assets/lock.png";
import { useHistory } from 'react-router';
import Axios from "axios"

function Loginform(props) {
  const history = useHistory()
  const [rememberMe, setRememberMe] = useState("unchecked");
  const [passwordShow, setPasswordShow] = useState(false);
  const [loginError, setLoginError] = useState({})
  const [loginValues, setLoginValues] = useState({
    loginemail: "",
    password: "",
    // role: "Employee"
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
    if (loginValues.loginemail !== "" && loginValues.password !== "" && Object.keys(loginError).length === 0) {
      Axios.post("http://localhost:3000/user/login",loginValues,{
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => {
            console.log(res)
            alert(res.status)
        })
        .catch((err) => {
            console.log(err)
            alert(err)
        })
      history.push("/dashboard")
    }
    if (loginValues.loginemail !== "" && loginValues.password !== "" && Object.keys(loginError).length === 0 && rememberMe === "checked") {
      localStorage.setItem("LoginData", JSON.stringify(loginValues))
    }
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked ? "checked" : "unchecked");
  };

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  const validateOnType = () => {
    setLoginError(validate(loginValues, props.isregistered))
  }

  return (
    <>
      <Card className="formwrapper">
        <div className="icon">
          <img
            src={lock}
            alt="lock"
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <hr />
        <Form onSubmit={handleLoginSubmit} onKeyUp={validateOnType}>
          <Form.Group controlId="formBasicloginemail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="loginemail"
              value={loginValues.loginemail}
              type="email"
              placeholder="Enter email"
              onChange={handleLogin}
            />
          </Form.Group>
          {loginError.loginemail && <small className="error-tag">{loginError.loginemail}</small>}
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
          {loginError.password && <small className="error-tag">{loginError.password}</small>}
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
              variant="secondary"
              onClick={props.setisregister}
            >
              Register here !!
                  </Button>
          </div>
        </Form>
      </Card>
    </>
  )
}

export default Loginform
