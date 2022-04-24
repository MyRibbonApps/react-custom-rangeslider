import React, { FC, useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import styles from "./styles.css"

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

const RangeSlider: FC<RangeSliderProps> = (
  {
    // progressBg = "",
    // trackBg = "",
    // thumbBg = "",
    // trackSize = 20,
    // thumbSize = 20,
    // min = 0,
    // max = 100,
    // step = 1,
  }
) => {
  const ref = useRef(null)
  const [value, setValue] = useState("0")

  const setCssProgress = (inputEl: any) => {
    const percent =
      ((inputEl.value - inputEl.min) / (inputEl.max - inputEl.min)) * 100
    inputEl.style.setProperty("--webkitProgressPercent", `${percent}%`)
  }

  useEffect(() => {
    const getRangeslider = ref.current
    setCssProgress(getRangeslider)
  }, [])
  return (
    <>
      <style>{styles}</style>
      <h1>Range Slider!!!!</h1>
      <input
        ref={ref}
        onChange={(range) => setValue(range.target.value)}
        // onMouseMove={}
        // onMouseDown={}
        // onMouseUp={}
        // onMouseLeave={}
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
