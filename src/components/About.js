import React, { useState } from "react";
import PropTypes from "prop-types";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
    border: "1px solid black",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  let toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      });

      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <>
      <div
        className="container"
        style={{color:props.mode==='dark'?'white':'black'}}
      >
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color:props.mode==='dark'?'white':'black'
                }}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              style={{
                backgroundColor: props.mode === "light" ? "dark" : "white",
                color:props.mode==='dark'?'white':'black'
              }}
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "grey" : "white",
                  color:props.mode==='dark'?'white':'black'
                }}
              >
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="container">
            <button className="btn btn-primary" onClick={toggleStyle}>
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}