import "./App.css"
import Slider from "react-custom-rangeslider/lib/index.esm"
import React, { useState } from "react"

function App() {
  const [value, setValue] = useState(1)
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
