import React,{useState} from "react";
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
      <Card className="mx-1">
        <Card.Header className="employeeImageHeader">
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
        </Card.Footer>
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
