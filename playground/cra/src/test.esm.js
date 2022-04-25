import React, { useRef, useState, useEffect } from "react"

function generateStyles({
  progressBg = "black",
  trackBg = "purple",
  thumbBg = "#000",
  trackSize = 20,
  thumbSize = 20,
}) {
  const style = `
  /* Default style for the element */
    input[type="range"]  {
         -webkit-appearance: none;
         -moz-appearance: none;
          appearance: none;
          width: 100%;
          margin: 0;
          padding: 0;
          --webkitProgressPercent: 0%;
    }
    input[type="range"]:focus  {
        outline: none;
     }


    /* The track in the range input */
    input[type="range"]::-webkit-slider-runnable-track {
        height: ${trackSize}px;
        background-image: linear-gradient(
         90deg,
         ${progressBg} var(--webkitProgressPercent),
         ${trackBg} var(--webkitProgressPercent)
        );
        border-radius: calc(${trackSize} / 2);
    }
    input[type="range"]::-moz-range-track {
        height: ${trackSize}px;
        background-color: ${trackBg};
        border-radius: calc(${trackSize} / 2);
    }
    input[type="range"]::-ms-track {
        height: ${trackSize}px;
        background-color: ${trackBg};
        border-radius: calc(${trackSize} / 2);
    }

    */ The thumb on the range input */
    input[type=range]::-webkit-slider-thumb {}
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: ${thumbBg};
      width: ${thumbSize}px;
      height: ${thumbSize}px;
      border-radius: calc(${thumbSize}px / 2);
      border: 7px solid black;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      margin-top: calc(((${thumbSize}px - ${trackSize}px) / 2) * -1);
      cursor: pointer;
}
    input[type="range"]::-moz-range-thumb {
        -moz-appearance: none;
        appearance: none;
        width: ${thumbSize}px;
        height: ${thumbSize}px;
        background-color: ${thumbBg};
        border-radius: calc(${thumbSize}px / 2);
        border: 7px solid black;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        margin-top: calc(((${thumbSize}px - ${trackSize}px) / 2) * -1);
        cursor: pointer;
}
    input[type="range"]::-ms-thumb {
        -ms-appearance: none;
        appearance: none;
        width: ${thumbSize}px;
        height: ${thumbSize}px;
        background-color: ${thumbBg};
        border-radius: calc(${thumbSize}px / 2);
        border: 7px solid black;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        margin-top: calc(((${thumbSize}px - ${trackSize}px) / 2) * -1);
        cursor: pointer;
}

    /*Progress for firefox etc */
        input[type="range"]::-moz-range-progress {
            height: ${trackSize}px;
            background-color: ${progressBg};
            border-radius: calc(${trackSize}px / 2) 0 0 calc(${trackSize}px / 2);
}
        input[type="range"]::-ms-fill-lower {
            height: ${trackSize}px;
            background-color: ${progressBg};
            border-radius: calc(${trackSize}px / 2) 0 0 calc(${trackSize}px / 2);
}
    `
  return style
}

const RangeSlider = (props) => {
  const inputRef = useRef(null)
  const [value, setValue] = useState("0")
  // const setCssProgress = (inputEl: any) => {
  //   const percent =
  //     ((inputEl.value - inputEl.min) / (inputEl.max - inputEl.min)) * 100 // 100 - 0 / 100 - 0 = 1 * 100 = 100%
  //   inputEl.style.setProperty("--webkitProgressPercent", `${percent}%`)
  // }
  const generateStyles$1 = () => {
    return generateStyles(props)
  }
  useEffect(() => {
    const getRangeslider = inputRef
    // setCssProgress(getRangeslider)
    if (getRangeslider.current) {
      const sliderStyles = getRangeslider.current.style
      console.log(sliderStyles)
      console.log(getRangeslider.current)
    }
  }, [])
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("style", null, generateStyles$1()),
    React.createElement("h1", null, "Range Slider!!!!"),
    React.createElement("input", {
      ref: inputRef,
      onChange: (range) => setValue(range.target.value),
      // onMouseMove={}
      // onMouseDown={}
      // onMouseUp={}
      // onMouseLeave={}
      type: "range",
      min: "2000",
      max: "30000",
      step: "500",
      value: value,
    })
  )
}

export { RangeSlider as default }
