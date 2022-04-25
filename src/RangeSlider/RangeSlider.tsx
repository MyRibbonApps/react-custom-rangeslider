import React, { FC, useEffect, useRef, useState } from "react"
import styles from "./styles"

type RangeSliderProps = {
  progressBg?: string
  trackBg?: string
  thumbBg?: string
  trackSize?: number
  thumbSize?: number

  min: number
  max: number
  step: number
}

const RangeSlider: FC<RangeSliderProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("0")
  let isChanging = false

  const setCssProgress = (inputEl: any) => {
    const percent =
      ((inputEl.value - inputEl.min) / (inputEl.max - inputEl.min)) * 100 // 100 - 0 / 100 - 0 = 1 * 100 = 100%
    inputEl.style.setProperty("--webkitProgressPercent", `${percent}%`)
  }

  const onMouseMove = () => {
    if (!isChanging) return
    setCssProgress(inputRef.current)
  }

  const generateStyles = () => {
    return styles(props)
  }
  useEffect(() => {
    // const getRangeslider = inputRef
    // if (getRangeslider.current) {
    //   const sliderStyles = getRangeslider.current.style
    //   console.log(sliderStyles)
    //   console.log(getRangeslider.current)
    // }
  }, [])
  return (
    <>
      <style>{generateStyles()}</style>
      <h1>Range Slider</h1>
      <input
        ref={inputRef}
        onChange={(range) => {
          setValue(range.target.value)
          isChanging = true
        }}
        onClick={() => {
          onMouseMove()
        }}
        onMouseMove={() => {
          isChanging = true
          onMouseMove()
        }}
        onMouseDown={() => (isChanging = true)}
        onMouseUp={() => (isChanging = false)}
        onMouseLeave={() => (isChanging = false)}
        type="range"
        min="2000"
        max="30000"
        step="500"
        value={value}
      ></input>
    </>
  )
}
export default RangeSlider
