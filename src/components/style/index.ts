import * as css from "./style.module.scss"

const parsed = {}

Object.keys(css).forEach((key) => {
  const content = css[key].slice(1, -1)

  try {
    parsed[key] = JSON.parse(content)
  } catch (err) {
    // Do nothing, drop
  }
})

export default parsed
