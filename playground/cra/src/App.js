import "./App.css"
import Slider from "react-custom-rangeslider"
import Slider2 from "./test.esm"
import React, { useState } from "react"

function App() {
  const [value, setValue] = useState("0")
  const props = {
    progressBg: "black",
    trackBg: "grey",
    thumbBg: "purple",
    trackSize: 10,
    thumbSize: 20,
    min: 0,
    max: 100,
    step: 1,
  }
  return (
    <div className="App" style={{ width: "500px", margin: "auto" }}>
      {value}
      <Slider2
        // progressBg="black"
        // trackBg="grey"
        // thumbBg="purple"
        trackSize={30}
        thumbSize={40}
        // min={0}
        // max={100}
        // step={1}
        value={value}
        setValue={setValue}
      />
    </div>
  )
}

export default App
