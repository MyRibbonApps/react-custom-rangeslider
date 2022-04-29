import React from "react"
import { render, screen } from "@testing-library/react"
import RangeSlider from "../RangeSlider/index"
const value = "10"
const max = "50"
const min = "20"
const step = "5"

test("Renders correctly", () => {
  const setValue = () => null
  render(<RangeSlider value={value} setValue={setValue} />)
  expect(screen.getByTestId("rangeSliderID")).toBeTruthy()
})

test("Does have the specified value", () => {
  const setValue = () => null
  render(<RangeSlider value={value} setValue={setValue} />)
  const el = document.querySelector('input[type="range"]') as HTMLInputElement
  console.log(el.value)
  const valueOfInput = el.value
  // console.log(window.getComputedStyle(el!))
  expect(valueOfInput).toBe(value)
})

test("Does have max value", () => {
  const setValue = () => null
  render(<RangeSlider value={value} setValue={setValue} max={max} />)
  const el = document.querySelector('input[type="range"]') as HTMLInputElement
  const valueOfInput = el.max
  expect(valueOfInput).toBe(max)
})

test("Does have min value", () => {
  const setValue = () => null
  render(<RangeSlider value={value} setValue={setValue} min={min} />)
  const el = document.querySelector('input[type="range"]') as HTMLInputElement
  const valueOfInput = el.min
  expect(valueOfInput).toBe(min)
})

test("Does have step value", () => {
  const setValue = () => null
  render(<RangeSlider value={value} setValue={setValue} step={step} />)
  const el = document.querySelector('input[type="range"]') as HTMLInputElement
  console.log(el.step)
  const valueOfInput = el.step
  expect(valueOfInput).toBe(step)
})
