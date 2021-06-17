import React from "react";
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
  // const style = {
  //   if(id === 1) {
  //     width: "5vw",
  //     height: "40vh",
  //     position: "relative",
  //     opacity: "0.5",
  //     padding:$card-padding;
  //     background-color: white;
  //     border: 1px solid rgb(128, 128, 128) !important;
  //     transition: all 1s ease-in;
  //     animation:  cardmove 5s ease-out forwards;
  //     box-sizing:content-box;
  //   }

  // }
  
  return (
    <>
      <div key={id} className="cardwrap">
        <img
        //   ref={ref}
          src={name}
          className={`cardimage-${id}`}
          alt="img"
          style={{ marginTop: `${value}px` }}
        />
      </div>
    </>
  );
}

export default Animation;
