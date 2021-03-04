import React from "react"
import { Accordion, AccordionItem } from "."

const story = {
  title: "UI/Accordion",
  component: AccordionItem,
  parameters: {
    status: 'TS Ready'
  }
}

export default story

const Template = (args) => (
  <Accordion>
    <AccordionItem {...args} title="First item title">
      Accordion content 1
    </AccordionItem>
    <AccordionItem title="Second item title">Accordion content 2</AccordionItem>
    <AccordionItem title="Third item title">Accordion content 3</AccordionItem>
  </Accordion>
)

export const Default = Template.bind({})
export const DefaultOpen = Template.bind({})

DefaultOpen.args = {
  defaultOpen: true
}

export const Disabled = Template.bind({})

Disabled.args = {
  disabled: true
}

export const Skeleton = (args) => {
  return (
    <Accordion>
      <AccordionItem {...args}>
        The contents have successfully loaded!
      </AccordionItem>
      <AccordionItem skeleton={true} />
      <AccordionItem skeleton={true} />
    </Accordion>
  )
}

Skeleton.args = {
  skeleton: true
}
