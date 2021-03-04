import React from "react"
import TextSkeleton from "."

const story = {
  title: "Utilities/Skeleton/TextSkeleton",
  component: TextSkeleton
}

export default story

const Template = (args) => <TextSkeleton {...args} />

export const Inline = Template.bind({})
export const Multiline = Template.bind({})

Multiline.args = {
  lines: 3
}
