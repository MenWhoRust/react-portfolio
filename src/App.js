import React from "react";
import "./styles/index.scss"
import ImagePin from "./components/image-pin";
import pic from "./resources/images/avatar-large.jpeg"
import MainMenu from "./components/main-menu";

function App() {
  return (
    <div className="app-container theme-dark">
     <MainMenu/>
    </div>
  );
}

export default App;
