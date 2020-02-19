import React from "react";
import "./styles/index.scss"
import ImagePin from "./components/image-pin";
import pic from "./resources/images/27804703.jpeg"

function App() {
  return (
    <div className="app-container">
      <div className="test-container">
          <ImagePin src={pic}/>
        <h1 className="heading-primary">Hello</h1>
      </div>
    </div>
  );
}

export default App;
