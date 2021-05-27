import React,{useEffect,useRef} from "react";
import { Card } from "react-bootstrap";
// import { gsap } from "gsap";


function Animation({value,id,name}) {

    // const ref = useRef(null);
//       useEffect(() => {
//     console.log("hello");
//     gsap.from("cardwrap", {
//       y:10,
//       x:250,
//       duration: 10,
//       delay:5
//     })
//   },[id]);

  return (
    <>
      <div key={id} className="cardwrap">
        <img
        //   ref={ref}
          src={name}
          className="cardimage"
          style={{ marginTop: `${value}px` }}
        />
      </div>
    </>
  );
}

export default Animation;
