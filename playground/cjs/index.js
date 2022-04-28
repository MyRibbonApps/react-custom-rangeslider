// We can only use cmj hee, so require our dependencies
const express = require("express")
const path = require("path")
const ReactSlider = require("react-custom-rangeslider")

const app = express()

app.use("/dist", express.static("dist"))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/index.html"))
})
app.listen(300, () => {
  console.log("Is running")
})
