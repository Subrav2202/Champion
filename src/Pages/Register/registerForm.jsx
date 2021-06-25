import React, { useState } from "react";
import "./regStyle.scss";
import lock from "../../Assets/lock.png";
import { eye, eyeSlash } from "../constant";
import validate from './validate'
// import { useHistory } from "react-router-dom";
import {
    Form,
    Button,
    Card,
    Row,
    Col
} from "react-bootstrap";
import axios from "axios";

function RegisterForm(props) {
    // const history = useHistory()
    const [registerError, setRegisterError] = useState({})
    const [imageFile, setImageFile] = useState()
    const [passwordShow, setPasswordShow] = useState({
        pass: false,
        cpass: false
    });

    const [registerValues, setRegisterValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
        password: "",
        confirmpass: "",
        // phone: "",
        role: "",
    });


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
        let file = e.target.files[0];
        setImageFile(file)
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (registerValues.firstName !== "" && registerValues.lastName !== "" && registerValues.email !== "" && registerValues.password !== "" && registerValues.confirmpass !== "" && registerValues.role !== "" && Object.keys(registerError).length === 0) {
            // localStorage.setItem("user", JSON.stringify(registerValues))
            const formData = new FormData();
            formData.append('avatar', imageFile)
            axios.post("http://localhost:3000/user/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then((res) => {
                    console.log(res.data)
                    let temp=registerValues;
                    delete temp["confirmpass"]
                    temp.avatar=res.data; 
                    setRegisterValues(temp)   
                    console.log(registerValues)
                    axios.post("http://localhost:3000/user/register",registerValues,{
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then((res) => {
                            console.log(res)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
                .catch((err) => {
                    console.log(err)
                })
            props.setisregister();
        }
    };
// console.log(passwordShow)
    const validateOnType = () => {
        setRegisterError(validate(registerValues, props.isregistered))
    }

    const togglePassword = (passtype) => {
        if (passtype === "pass") {
            setPasswordShow((value) => {
                let pass = !value.pass;
                return { ...value,pass }
            });
        }
        else {
            setPasswordShow((value) => {
                let cpass = !value.cpass;
                return { ...value,cpass }
            });
        }
    };
    return (
        <>
            <Card className="formwrapper">
                <div className="icon">
                    <img
                        src={lock}
                        alt="lock"
                        style={{ height: "80px", width: "80px" }}
                    />
                </div>
                <hr />
                <Form onSubmit={handleRegisterSubmit} onKeyUp={validateOnType}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            value={registerValues.email}
                            type="email"
                            placeholder="Enter email"
                            onChange={handleRegister}
                        />
                    </Form.Group>
                    {registerError.email && <small className="error-tag">{registerError.email}</small>}
                    <br />
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control
                                    name="firstName"
                                    value={registerValues.firstName}
                                    type="text"
                                    placeholder="Enter firstName"
                                    onChange={handleRegister}
                                />
                            </Col>
                            <Col>
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control
                                    name="lastName"
                                    value={registerValues.lastName}
                                    type="text"
                                    placeholder="Enter lastName"
                                    onChange={handleRegister}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    {registerError.fullname && <small className="error-tag">{registerError.fullname}</small>}
                    <br />
                    <Form.Group>

                        <Row>
                            <Col>
                                <Form.Label>Password</Form.Label>
                                <div className="pass-wrapper">
                                    <Form.Control
                                        name="password"
                                        value={registerValues.password}
                                        type={passwordShow.pass ? "text" : "password"}
                                        placeholder="Enter Password"
                                        onChange={handleRegister}
                                    />
                                    <i onClick={() => togglePassword("pass")}>
                                        {passwordShow.pass ? eye : eyeSlash}
                                    </i>
                                </div>
                            </Col>

                            <Col>
                                <Form.Label>Confirm Password</Form.Label>
                                <div className="pass-wrapper">
                                    <Form.Control
                                        name="confirmpass"
                                        value={registerValues.confirmpass}
                                        type={passwordShow.cpass ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        onChange={handleRegister}
                                    />
                                    <i onClick={() => togglePassword("cpass")}>
                                        {passwordShow.cpass ? eye : eyeSlash}
                                    </i>
                                </div>
                            </Col>
                        </Row>
                    </Form.Group>
                    {registerError.password && <small className="error-tag">{registerError.password}</small>}
                    {/* <Form.Group>
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
                    {registerError.phone && <small className="error-tag">{registerError.phone}</small>} */}
                    <br />
                    <Form.Group controlId="formFileSm">
                        <Form.File
                            onChange={handleFile}
                            type="file"
                            accept="image/png, image/jpeg"
                            required
                        // name="image"
                        // required
                        />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Control
                            className="w-50 p-2"
                            name="role"
                            as="select"
                            custom
                            onChange={handleRegister}
                        >
                            <option>Select Role</option>
                            <option value="ADMIN">Admin</option>
                            <option value="CTO">CTO</option>
                            <option value="DIRECTOR">Director</option>
                            <option value="DELIVERY_MANAGER">DELIVERY MANAGER</option>
                            <option value="TEAM_LEAD">Team Lead</option>
                            <option value="ASSOCIATE_TEAM_LEAD">
                                Associate Team Lead
                    </option>
                            <option value="MENTOR">Mentor</option>
                            <option value="DEVELOPER">Developer</option>
                        </Form.Control>
                    </Form.Group>
                    <hr />
                    <div className="footer">
                        <Button variant="primary" type="submit">
                            Submit
                  </Button>
                        <Button
                            variant="secondary"
                            onClick={props.setisregister}
                        >
                            already register !!
                  </Button>
                    </div>
                </Form>
            </Card>
        </>
    )
}

export default RegisterForm
