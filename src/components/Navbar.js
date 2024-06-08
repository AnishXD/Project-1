import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const handleOnClickPrimary = () => {
    props.changeColor("Blue");
  };
  const handleOnClickSecondary = () => {
    props.changeColor("Melon");
  };
  const handleOnClickSuccess = () => {
    props.changeColor("Green");
  };
  const handleOnClickDanger = () => {
    props.changeColor("Red");
  };
  const handleOnClickWarning = () => {
    props.changeColor("Pumpkin");
  };
  const handleOnClickInfo = () => {
    props.changeColor("other");
  };

  return (
    // props.color &&
    // props.color.type &&(
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <button
          className="navbar-toggler my-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse my-1"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.nav1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.nav2}
              </a>
            </li>
          </ul>

          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                border: "1px solid black",
              }}
              onClick={handleOnClickPrimary}
            ></div>

            <div
              className="bg-danger rounded mx-2"
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                border: "1px solid black",
              }}
              onClick={handleOnClickSuccess}
            ></div>
            <div
              className="bg-success rounded mx-2"
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                border: "1px solid black",
              }}
              onClick={handleOnClickDanger}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                border: "1px solid black",
              }}
              onClick={handleOnClickWarning}
            ></div>
          </div>
          <div
            className={`form-check my-1 form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label mx-2"
              htmlFor="flexSwitchCheckDefault"
            >
              {`${props.mode === "light" ? "dark" : "light"} mode`}
            </label>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary my-1" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    // )
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Template",
  nav1: "nav1",
  nav2: "nav2",
};
