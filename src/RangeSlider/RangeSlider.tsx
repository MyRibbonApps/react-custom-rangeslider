import React, { FC, useRef } from "react"
import styles from "./styles"

type RangeSliderProps = {
  progressBg?: string
  trackBg?: string
  thumbBg?: string
  size?: "S" | "M" | "L" | "XL" | "XXL"

  min?: number
  max?: number
  step?: number

  value: any
  setValue: any
}

const RangeSlider: FC<RangeSliderProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { min = 0, max = 100, step = 1, value, setValue } = props

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
  const onMouseLeave = () => {
    isChanging = false
  }
  const onMouseStart = () => {
    isChanging = true
  }
  const generateStyles = () => {
    return styles(props)
  }

  return (
    <>
      <style>{generateStyles()}</style>
      <input
        ref={inputRef}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(range) => setValue(range.target.value)}
        onClick={onMouseMove}
        onMouseMove={() => {
          isChanging = true
          onMouseMove()
        }}
        onTouchMove={() => {
          isChanging = true
          onMouseMove()
        }}
        onTouchStart={onMouseStart}
        onTouchEnd={onMouseLeave}
        onMouseDown={onMouseStart}
        onMouseUp={onMouseLeave}
        onMouseLeave={onMouseLeave}
      ></input>
    </>
  )
}
export default RangeSlider
