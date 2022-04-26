import React, { useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import RangeSlider from "../index"

export default {
  title: "RangeSlider",
  component: RangeSlider,
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} as ComponentMeta<typeof RangeSlider>
export const Primary: ComponentStory<typeof RangeSlider> = () => {
  const [value, setValue] = useState("0")
  return <RangeSlider value={value} setValue={setValue} size="M" />
}
