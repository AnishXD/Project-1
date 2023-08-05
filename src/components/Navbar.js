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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
          <div>
            <button
              type="button"
              className="btn btn-outline-primary mx-2"
              onClick={handleOnClickPrimary}
            >
              Blue
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary mx-2"
              onClick={handleOnClickSecondary}
            >
              Melon
            </button>
            <button
              type="button"
              className="btn btn-outline-success mx-2"
              onClick={handleOnClickSuccess}
            >
              Green
            </button>
            <button
              type="button"
              className="btn btn-outline-danger mx-2"
              onClick={handleOnClickDanger}
            >
              Red
            </button>
            <button
              type="button"
              className="btn btn-outline-warning mx-2"
              onClick={handleOnClickWarning}
            >
              Pumpkin
            </button>
            <button
              type="button"
              className="btn btn-outline-info mx-2"
              onClick={handleOnClickInfo}
            >
              Navy
            </button>
          </div>
          <div
            className={`form-check form-switch text-${
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
            <button className="btn btn-primary" type="submit">
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
