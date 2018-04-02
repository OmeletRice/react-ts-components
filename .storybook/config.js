import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/button.js')
  require('../stories/input.js')
}

configure(loadStories, module);