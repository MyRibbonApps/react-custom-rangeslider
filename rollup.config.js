import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import Ts from "rollup-plugin-typescript2"
import { string } from "rollup-plugin-string"
import json from "@rollup/plugin-json"
// import { terser } from "rollup-plugin-terser"

// const production = !process.env.ROLLUP_WATCH
export default {
  check: false,
  input: "src/index.ts",
  // output: [
  //   {
  //     file: "lib/index.esm.js",
  //     format: "esm",
  //   },
  //   {
  //     file: "lib/index.cjs.js",
  //     format: "cjs",
  //   },
  // ],
  output: [
    {
      dir: "lib/esm",
      format: "esm"
    },
    {
      dir: "lib/cjs",
      format: "cjs"
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: ["node_modules/**", "tests/**"]
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
  preserveModules: true,
  external: ["react", "react-dom"]
}
