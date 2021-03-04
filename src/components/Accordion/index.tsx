import React, { useState } from "react"
import TextSkeleton from "../TextSkeleton"
import * as styles from "./accordion.module.scss"
import { IElementProps } from "../typings/props"

const Accordion: React.FC = ({ children }) => {
  return <div className={styles.accordion}>{children}</div>
}

interface IAccordionItemProps extends IElementProps {
  /** Title of the accordion tab */
  title?: string;
  /** Whether or not the accordion tab should be open by default */
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<IAccordionItemProps> = ({ children, defaultOpen = false, title = "Dropdown", skeleton = false, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false)

  console.log(styles)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return <div
    className={[
      styles.accordionItem,
      styles[
      "accordionItem_state_" + (isOpen ? "open" : "closed")
      ],
      styles[
      "accordionItem_ui_" +
      (disabled ? "disabled" : "enabled")
      ]
    ].join(" ")}
  >
    <div
      onClick={toggle}
      tabIndex={disabled ? undefined : 0}
      role="button"
      className={styles.accordionItemTitle}
    >
      <span
        className={[
          styles.accordionItemTitleIcon,
          styles.accordionItemTitleChild
        ].join(" ")}
      >
        ^
      </span>
      <span
        className={[
          styles.accordionItemTitleText,
          styles.accordionItemTitleChild
        ].join(" ")}
      >
        {skeleton ? (
          <TextSkeleton />
        ) : (
          title
        )}
      </span>
    </div>
    <div className={styles.accordionItemContent}>
      {skeleton ? (
        <TextSkeleton lines={5} />
      ) : (
        children
      )}
    </div>
  </div>
}

export { Accordion, AccordionItem }
