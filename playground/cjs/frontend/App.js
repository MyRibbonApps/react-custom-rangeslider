const Slider = require("react-custom-rangeslider/lib/index.cjs")
const React = require("react")
const useState = require("react").useState
const App = () => {
  const [value, setValue] = useState("0")
  return (
    <>
      <h1>{value}</h1>
      <Slider value={value} setValue={setValue} progressBg="purple" size="M" />
    </>
  )
}

export default App
