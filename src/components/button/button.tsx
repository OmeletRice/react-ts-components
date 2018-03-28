import * as React from 'react'
import * as PropTypes from 'prop-types'

import './style/index.tsx'

export type ButtonType = 'primary' | 'warning' | 'danger'
export type ButtonSize = 'small' | 'default' | 'large'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  onClick?: React.FormEventHandler<any>
  disabled?: boolean
  style?: React.CSSProperties
  className?: string
}

export default class Button extends React.Component<ButtonProps, any> {
  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(['small', 'defaule', 'large']),
    onClick: PropTypes.func
  }

  timeout: number

  constructor (props: ButtonProps) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  componentWillReceiveProps (nextProps: ButtonProps) {
    console.log('componentWillReceiveProps', nextProps)
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  componentWillMount () {
    console.log('componentWillMount', this)    
  }

  handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ clicked: true })
    console.log('click evt: ', evt)

    clearTimeout(this.timeout)
    this.timeout = window.setTimeout(() => this.setState({ clicked: false }), 500)

    const onClick = this.props.onClick
    if (onClick) {
      onClick(evt)
    }
  }

  render () {
    const {
      children
    } = this.props

    return (
      <button
        onClick={this.handleClick}
      >
        {children}
      </button>
    )
  }
}
