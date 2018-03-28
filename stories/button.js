import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select } from '@storybook/addon-knobs/react'

import Button from '../src/components/button/index.tsx'

const buttonStories = storiesOf('Button', module)
buttonStories.addDecorator(withKnobs)

buttonStories.add('props', () => {
  const typeOption = {
    default: 'default',
    primary: 'primary',
    warning: 'warning',
    danger: 'danger'
  }
  return (
    <Button
      type={select('type', typeOption, 'default')}
      onClick={action('clicked')}
    >
      {text('label', 'Hello Button')}
    </Button>
  )
})
