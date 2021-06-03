import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { IoIosPerson } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";
import Nominatemodal from "./nominateModel"
import PrevNominationModal from "./prevNominationModal"

function EmployeeCard() {
  const [modalShow, setModalShow] = useState(false);
  const [prevNomination, setprevNomination] = useState(false);
  return (
    <>
      <Card className="employee-cardWrapper">
        <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" id="background-img" />
        <img src="https://source.unsplash.com/random" className="user-image" />
        <div id="card-body">
          <h3 className="employee-cardname">Vishal Yadav</h3>
          <br />
          <div className="nominate-history-wrapper">
            <div className="no-of-nomination">
              <div className="w-100">
                <h4 className="d-flex justify-content-center">10</h4>
                <small className="d-flex justify-content-center">Nominated</small>
              </div>
            </div>
            <div className="total-nomination">
              <div className="w-100">
                <h4 className="d-flex justify-content-center">40</h4>
                <small className="d-flex justify-content-center">Total Nominations</small>
              </div>
            </div>
          </div>

          <br />

          <div className="d-flex justify-content-around">
            <Button className="nominate-btn" onClick={() => setModalShow(true)}>Nominate</Button>
            <Button  onClick={() => setprevNomination(true)}>Info</Button>
          </div>
        </div>
        {/* <Card.Header className="employeeImageHeader">
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/random"
            className="employeeImage"
          />
        </Card.Header>

        <Card.Body>
          <div className="body">
            <IoIosPerson className="bodyicons" />
            <Card.Text className="bodyname">Elon Musk</Card.Text>
          </div>
          <div className="body">
            <MdEmail className="bodyicons" />
            <Card.Text className="bodyname">test@gmail.com</Card.Text>
          </div>
          <div className="body">
            <MdPhone className="bodyicons" />
            <Card.Text className="bodyname">992142424</Card.Text>
          </div>
          <div className="body">
            <BsPeopleCircle className="bodyicons" />
            <Card.Text className="bodyname">developer</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Button variant="outline-success" size='sm' onClick={() => setModalShow(true)}>Nominate</Button>
          <Button variant="outline-info" size='sm' onClick={() => setprevNomination(true)}>History</Button>
        </Card.Footer> */}
      </Card>
      { modalShow &&
        <Nominatemodal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      }
      { prevNomination &&
        <PrevNominationModal
          show={prevNomination}
          onHide={() => setprevNomination(false)}
        />
      }
    </>
  );
}

export default EmployeeCard;
