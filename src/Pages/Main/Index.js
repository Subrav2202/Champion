import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./style.css";
import { gsap } from "gsap";
import { Card, Container, Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner";
// import styled from "styled-components";
import {margintop} from '../constant'
import cartoon1 from "./Assets/cartoon1.jpg"
import cartoon2 from "./Assets/cartoon2.png"
import cartoon3 from "./Assets/cartoon3.png"
import cartoon4 from "./Assets/cartoon4.jpg"
import cartoon5 from "./Assets/cartoon5.jpg"
import cartoon6 from "./Assets/cartoon6.jpg"
import cartoon7 from "./Assets/cartoon7.jpg"
import cartoon8 from "./Assets/cartoon8.jpg"
import cartoon9 from "./Assets/cartoon9.jpg"
import cartoon10 from "./Assets/cartoon10.jpg"

function Index() {

  const [img, setimg] = useState();
  const [load, setload] = useState(true)
  
  // useEffect(() => {
  //   Axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
  //     .then(res=>{
  //       setimg(res.data);
  //       setload(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    setimg([cartoon1,cartoon2,cartoon3,cartoon4,cartoon5,cartoon6,cartoon7,cartoon8,cartoon9,cartoon10])
    setload(false);
    gsap.from(".cardimage", {
      x:-10,
      duration: 100,
    });
  }, []);

    return(
      <>
      {
        load? <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />
          :
        <Container fluid>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h1 className="heading">Champions</h1>
            <div className="headerwrap">
              {img.map((item, index) => {  
                let value=margintop()
                return (
                  <Card key={index} className="cardwrap" style={{marginTop:`${value}px`}}>
                    <Card.Img variant="top" src={item} className='cardimage'/>
                  </Card>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
      }
     </> 
      );  
}
export default Index;
