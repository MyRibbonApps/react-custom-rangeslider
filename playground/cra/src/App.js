import "./App.css"
import Slider from "react-custom-rangeslider"
import React, { useState } from "react"

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App" style={{ width: "500px", margin: "auto" }}>
      {value}
      <Slider
        // progressBg="black"
        // trackBg="grey"
        // thumbBg="purple"
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
