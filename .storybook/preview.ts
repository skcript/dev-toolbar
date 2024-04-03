import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import './../src/styles/globals.scss'

const preview: Preview = {
  // globalTypes: {
  //   darkMode: {
  //     defaultValue: true // Enable dark mode by default on all stories
  //   }
  // },
  parameters: {
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      darkClass: ['dark', '!tw-bg-background'],
      lightClass: 'light',
      current: 'dark'
      // dark: { ...themes.dark }
      //   light: { ...themes.light }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
