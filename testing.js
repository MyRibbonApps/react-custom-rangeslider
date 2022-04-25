import React, { useState } from "react"

const RangeSlider = () => {
  const [value, setValue] = useState("0")
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("input", {
      onChange: (range) => setValue(range.target.value),
      type: "range",
      min: "2000",
      max: "30000",
      step: "500",
      value: value
    })
  )
}

export { RangeSlider as default }
