import React, { useRef } from "react"

var sizes = [
  { size: "XXL", thumbSize: 60, trackSize: 50, spacing: { right: 4 } },
  { size: "XL", thumbSize: 50, trackSize: 40, spacing: { right: 4 } },
  { size: "L", thumbSize: 40, trackSize: 30, spacing: { right: 4 } },
  { size: "M", thumbSize: 30, trackSize: 20, spacing: { right: 4 } },
  { size: "S", thumbSize: 25, trackSize: 15, spacing: { right: 4 } },
]

function generateStyles({
  progressBg = "#06c",
  trackBg = "#f2f2f2",
  thumbBg = "#fbfbfd",
  size = "M",
}) {
  let trackSize = 20
  let thumbSize = 20
  const styleProperties = sizes.find((sz) => sz.size === size) // Tries to find the style the user passed down, if not then add default style
  if (styleProperties) {
    trackSize = styleProperties.trackSize
    thumbSize = styleProperties.thumbSize
  }
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
        border-radius: calc(${trackSize}px / 2);
    }
    input[type="range"]::-moz-range-track {
        height: ${trackSize}px;
        background-color: ${trackBg};
        border-radius: calc(${trackSize}px / 2);
    }
    input[type="range"]::-ms-track {
        height: ${trackSize}px;
        background-color: ${trackBg};
        border-radius: calc(${trackSize}px / 2);
    }

    */ The thumb on the range input */
    input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
      appearance: none;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background: ${thumbBg};
      width: ${thumbSize}px;
      height: ${thumbSize}px;
      border-radius: calc(${thumbSize}px / 2);
      /*
      border: 7px solid black;
      */
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      margin-top: calc(((${thumbSize}px - ${trackSize}px) / 2) * -1);
      position: relative;
       /*
        right: 4px;
        */
      cursor: pointer;
}
    input[type="range"]::-moz-range-thumb {
        -moz-appearance: none;
        appearance: none;
        width: ${thumbSize}px;
        height: ${thumbSize}px;
        background-color: ${thumbBg};
        border-radius: calc(${thumbSize}px / 2);
        /*
        border: 7px solid black;
        */
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        margin-top: calc(((${thumbSize}px - ${trackSize}px) / 2) * -1);
        position: relative;
        /*
        right: 4px;
        */
        cursor: pointer;
}
    input[type="range"]::-ms-thumb {
        -ms-appearance: none;
        appearance: none;
        width: ${thumbSize}px;
        height: ${thumbSize}px;
        background-color: ${thumbBg};
        border-radius: calc(${thumbSize}px / 2);
        /*
        border: 7px solid black;
        */
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        margin-top: calc(((${thumbSize}px - ${trackSize}px) / 2) * -1);
        position: relative;
        /*
        right: 4px;
        */
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
  // const [value, setValue] = useState("0")
  const { min = 0, max = 100, step = 1, value, setValue } = props
  let isChanging = false
  const setCssProgress = (inputEl) => {
    const percent =
      ((inputEl.value - inputEl.min) / (inputEl.max - inputEl.min)) * 100 // 100 - 0 / 100 - 0 = 1 * 100 = 100%
    inputEl.style.setProperty("--webkitProgressPercent", `${percent}%`)
  }
  const onMouseMove = () => {
    if (!isChanging) return
    setCssProgress(inputRef.current)
  }
  const onMouseLeave = () => {
    isChanging = false
  }
  const onMouseStart = () => {
    isChanging = true
  }
  const generateStyles$1 = () => {
    return generateStyles(props)
  }
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("style", null, generateStyles$1()),
    React.createElement("input", {
      ref: inputRef,
      onChange: (range) => {
        setValue(range.target.value)
      },
      onClick: () => {
        onMouseMove()
      },
      onMouseMove: () => {
        isChanging = true
        onMouseMove()
      },
      onTouchMove: () => {
        isChanging = true
        onMouseMove()
      },
      onTouchStart: onMouseStart,
      onTouchEnd: onMouseLeave,
      onMouseDown: onMouseStart,
      onMouseUp: onMouseLeave,
      onMouseLeave: onMouseLeave,
      type: "range",
      min: min,
      max: max,
      step: step,
      value: value,
    })
  )
}

export { RangeSlider as default }
