import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import Ts from "rollup-plugin-typescript2"
import { terser } from "rollup-plugin-terser"

const production = !process.env.ROLLUP_WATCH
export default {
  input: "src/index.js",
  output: {
    file: "lib/bundle.js",
    format: "esm"
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    production && terser(),
    Ts()
  ],
  external: "react"
}
