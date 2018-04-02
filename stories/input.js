import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs/react'

import Input from '../src/components/input/index.tsx'

const InputStories = storiesOf('Input', module)
InputStories.addDecorator(withKnobs)

InputStories.add('props', () => {
  return (
    <Input/>
  )
})
