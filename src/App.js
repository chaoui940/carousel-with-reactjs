import React from "react";
import Carousel from "react-elastic-carousel";
import card from "./card";
import "./styless.css"
function App() {
  return (
    <div className="App">
      <Carousel>
    <card /> 
      </Carousel>
    </div>
  );
}

export default App;
