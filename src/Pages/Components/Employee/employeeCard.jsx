import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Nominatemodal from "./nominateModel"
import InfoModal from "./InfoModal"

function EmployeeCard() {
  const [modalShow, setModalShow] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  return (
    <>
      <Card className="employee-cardWrapper">
        <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" id="background-img" alt="empbackimg"/>
        <img src="https://source.unsplash.com/random" className="user-image" alt="empimg"/>
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
            <Button  onClick={() => setInfoModal(true)}>Info</Button>
          </div>
        </div>

      </Card>
      { modalShow &&
        <Nominatemodal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      }
      { infoModal &&
        <InfoModal
          show={infoModal}
          onHide={() => setInfoModal(false)}
        />
      }
    </>
  );
}

export default EmployeeCard;
