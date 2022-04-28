// We can only use cmj hee, so require our dependencies
const React = require("react")
const ReactDOM = require("react-dom/server")
const express = require("express")
const ReactSlider = require("react-custom-rangeslider")

const app = express()

app.get("/", (req, res) => {
  console.log(ReactSlider)
  const el = React.createElement(ReactSlider)
  const body = ReactDOM.renderToString(el)
  console.log(body)
  res.send(
    `
<!DOCTYPE html>
  <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
    <span>Heeeelllooo</span>
    ${body}
</body>
</html>
`
  )
})
app.listen(300, () => {
  console.log("Is running")
})
