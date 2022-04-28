import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import Ts from "rollup-plugin-typescript2"
import { string } from "rollup-plugin-string"
import json from "@rollup/plugin-json"
// import { terser } from "rollup-plugin-terser"

// const production = !process.env.ROLLUP_WATCH
export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.esm.js",
      format: "esm"
    },
    {
      file: "lib/index.cjs.js",
      format: "cjs"
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    // For mimimize the bundle
    // production && terser(),
    Ts(),
    json({
      compact: true
    }),
    string({
      include: "**/*.css"
    })
  ],
  external: ["react", "react-dom"]
}
