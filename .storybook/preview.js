import { addParameters } from '@storybook/react';
import "../src/components/style/global.module.scss"

addParameters({
  statuses: {
    'TS Stable': '#52AA5E',
    'TS Ready': '#084B83',
    'TS WIP': '#F18F01',
    'Not TS': '#FF4785',
    'Beta': '1EA7FD'
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    grid: {
      disable: false,
      cellSize: 8,
      opacity: 0.1,
      cellAmount: 4
    }
  }
}
