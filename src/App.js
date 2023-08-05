import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const changeColor = (color) => {
    let backgroundColor, textColor;
    switch (color) {
      case "Blue":
        backgroundColor = "#93E1D8";
        textColor = "white";
        break;
      case "Melon":
        backgroundColor = "#FFA69E";
        textColor = "white";
        break;
      case "Green":
        backgroundColor = "#87A878";
        textColor = "white";
        break;
      case "Red":
        backgroundColor = "#92140C";
        textColor = "white";
        break;
      case "Pumpkin":
        backgroundColor = "#FF6700";
        textColor = "white";
        break;
      default:
        backgroundColor = "#011638";
        textColor = "white";
    }
  
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212121";
      showAlert("Dark Mode is been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is been Enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}




      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        changeColor={changeColor}
      />
    <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Textbox
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
