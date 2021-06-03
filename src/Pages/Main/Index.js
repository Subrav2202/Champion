import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import "./mainStyle.scss";
// import { gsap } from "gsap";
import { Card, Container, Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner";
import Navbar from "../Navigation/Navbar"
// import styled from "styled-components";
import Animation from "./Animation"
import { margintop } from "../constant";
import cartoon1 from "../../Assets/cartoon1.jpg";
import cartoon2 from "../../Assets/cartoon2.png";
import cartoon3 from "../../Assets/cartoon3.png";
import cartoon4 from "../../Assets/cartoon4.jpg";
import cartoon5 from "../../Assets/cartoon5.jpg";
import cartoon6 from "../../Assets/cartoon6.jpg";
import cartoon7 from "../../Assets/cartoon7.jpg";
import cartoon8 from "../../Assets/cartoon8.jpg";
import cartoon9 from "../../Assets/cartoon9.jpg";
import cartoon10 from "../../Assets/cartoon10.jpg";

function Index() {
  const [img, setimg] = useState();
  const [load, setload] = useState(true);
  // const [count, setcount] = useState();

  // useEffect(() => {
  //   Axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
  //     .then(res=>{
  //       setimg(res.data);
  //       setload(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // const ref = useRef(null);

  useEffect(() => {
    setimg([
      { id: 1, name: cartoon1 },
      { id: 2, name: cartoon2 },
      { id: 3, name: cartoon3 },
      { id: 4, name: cartoon4 },
      { id: 5, name: cartoon5 },
      { id: 6, name: cartoon6 },
      { id: 7, name: cartoon7 },
      { id: 8, name: cartoon8 },
      { id: 9, name: cartoon9 },
      { id: 10, name: cartoon10 },
    ]);
    setload(false);
  }, []);

  // useEffect(() => {
  //   console.log("hello");
  //   // gsap.from("cardimage", {
  //   //   y:10,
  //   //   x:250,
  //   //   duration: 10,
  //   //   delay:5
  //   // })
  // },[count]);

  // const Counter=(id)=>{
  //   setcount(() => setcount(id))
  // }
  return (
    <>
      {load ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100}/>
      ) : (
        <Container fluid>
          <Row>
          <Navbar/>
            <Col md={{ span: 10, offset: 1 }}>
            <h3 className="heading">Champions</h3>
              <div className="headerwrap">
                {img.map((item) => {
                  //  Counter(item.id)
                  let value = margintop();
                  return (
                  <Animation key={item.id} id={item.id} value={value} name={item.name}/>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
export default Index;
