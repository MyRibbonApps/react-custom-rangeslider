const webpack = require("webpack")
const path = require("path")

module.exports = {
  entry: "./frontend/index.js",
  mode: "development",
  watch: true,
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
}
