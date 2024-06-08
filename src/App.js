import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const changeColor = (color) => {
    let backgroundColor, textColor;
    switch (color) {
      case "Blue":
        backgroundColor = "blue";
        textColor = "white";
        break;
      case "Green":
        backgroundColor = "red";
        textColor = "white";
        break;
      case "Red":
        backgroundColor = "green";
        textColor = "white";
        break;
      case "Pumpkin":
        backgroundColor = "yellow";
        textColor = "white";
        break;
      
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
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        changeColor={changeColor}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <About mode={mode}/>
        <TextForm
          showAlert={showAlert}
          heading="Enter Text to analyze "
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
