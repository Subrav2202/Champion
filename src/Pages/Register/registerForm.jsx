import React, { useState } from "react";
import "./regStyle.scss";
import lock from "../../Assets/lock.png";
import validate from './validate'
// import { useHistory } from "react-router-dom";
import {
    Form,
    Button,
    Card,
} from "react-bootstrap";

function RegisterForm(props) {
    // const history = useHistory()
    const [registerError, setRegisterError] = useState({})

    const [registerValues, setRegisterValues] = useState({
        fullname: "",
        registeremail: "",
        phone: "",
        image: "",
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
        // const file = e.target.files[0]
        console.log(e.target.files[0].name)
    }
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (registerValues.fullname !== "" && registerValues.registeremail !== "" && registerValues.phone !== "" && registerValues.role !== "" && Object.keys(registerError).length === 0) {
            localStorage.setItem("user", JSON.stringify(registerValues))
            props.setisregister();
        }
    };

    const validateOnType = () => {
        setRegisterError(validate(registerValues, props.isregistered))
    }
    console.log(registerValues)
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
                    <Form.Group controlId="formFileSm">
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
                            className="w-50 p-2"
                            name="role"
                            as="select"
                            custom
                            onChange={handleRegister}
                        >
                            <option>Select Role</option>
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
