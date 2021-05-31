import React, { useState } from 'react'
import { Form ,Button} from 'react-bootstrap';
import "./regStyle.scss";
import { eye, eyeSlash } from "../constant";
import validate from './validate'
import lock from "./lock.png";

function Loginform(props) {
    const [rememberMe, setRememberMe] = useState("unchecked");
    const [passwordShow, setPasswordShow] = useState(false);
    const [loginError, setLoginError] = useState({})
    const [loginValues, setLoginValues] = useState({
        loginemail: "",
        password: "",
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
        setLoginError(validate(loginValues,props.isregistered))
    };
    
    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked ? "checked" : "unchecked");
    };
    
    const togglePassword = () => {
        setPasswordShow(passwordShow ? false : true);
    };
    
    return (
        <>
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
                    name="loginemail"
                    value={loginValues.loginemail}
                    type="email"
                    placeholder="Enter email"
                    onChange={handleLogin}
                  />
                </Form.Group>
                {loginError.loginemail && <small className="error-tag">{loginError.loginemail}</small> }
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
                    variant="outline-info"
                    onClick={props.setisregister}
                  >
                    register here !!
                  </Button>
                </div>
              </Form>
            </div>
        </>
    )
}

export default Loginform
