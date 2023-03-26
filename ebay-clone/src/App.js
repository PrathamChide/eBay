import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
      <Header />
      <br />
      <br />
      <Navbar />
      <ImageSlider />
    </div>
  );
}

export default App;
