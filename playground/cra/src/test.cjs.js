"use strict"

var React = require("react")

function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e }
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React)

var styles = "h1 {\n  font-size: 20px;\n  color: purple;\n}\n"

const RangeSlider = ({}) => {
  // const inputRef = useRef(null)
  const [value, setValue] = React.useState("0")
  // const setCssProgress = (inputEl: any) => {
  //   const percent =
  //     ((inputEl.value - inputEl.min) / (inputEl.max - inputEl.min)) * 100
  //   inputEl.style.setProperty("--webkitProgressPercent", `${percent}%`)
  // }
  // useEffect(() => {
  // const getRangeslider = inputRef
  // // setCssProgress(getRangeslider)
  // console.log(getRangeslider)
  // }, [])
  return React__default["default"].createElement(
    React__default["default"].Fragment,
    null,
    React__default["default"].createElement("style", null, styles),
    React__default["default"].createElement("h1", null, "Range Slider!!!!"),
    React__default["default"].createElement("input", {
      // ref={inputRef}
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

module.exports = RangeSlider
