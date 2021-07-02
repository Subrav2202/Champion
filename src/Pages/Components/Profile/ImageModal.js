import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { baseUrl } from "../../constant";

function ImageModal(props) {
    const [imageFile, setImageFile] = useState()
    const [updateValues, setUpdateValues] = useState({
        avatar: ""
    })

    const handleFile = (e) => {
        let file = e.target.files[0];
        setImageFile(file)
    }

    const ImageSubmit = () => {
        const formData = new FormData();
        formData.append('avatar', imageFile)
        axios.post(`${baseUrl}/user/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                let temp = updateValues;
                temp.avatar = res.data;
                setUpdateValues(temp);
                axios.patch(`${baseUrl}/user/${props.currentUser.id}`, updateValues, {
                    headers: {
                        Authorization: props.currentUser.token
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
        props.onHide()
    }
    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="profile-modal-wrapper"
            >
                <Modal.Header className="profile-modal-header">
                    <h6>Change Image</h6>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFileSm">
                            <Form.File
                                onChange={handleFile}
                                type="file"
                                accept="image/png, image/jpeg"
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="outline-success" onClick={ImageSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ImageModal;
