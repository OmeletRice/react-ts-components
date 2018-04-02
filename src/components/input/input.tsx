import * as React from 'react'
import * as ProtoType from 'prop-types'

export interface AbstractInputProps {
  prefixCls?: string
  className?: string
  defaultValue?: any
  value?: any
  style?: React.CSSProperties
} 

export interface InputProps extends AbstractInputProps {
  placeholder?: string
  type?: string
  size?: 'large' | 'default' | 'small'
  disabled?: boolean
  readOnly?: boolean

  onPressEnter?: React.FormEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onClick?: React.FormEventHandler<HTMLInputElement>
  onFocus?: React.FormEventHandler<HTMLInputElement>
  onBlur?: React.FormEventHandler<HTMLInputElement>
}


export default class Input extends React.Component<InputProps, any> {
  static defaultProps = {
    prefixCls: 'om-input',
    type: 'text',
    disabled: false
  }

  static protoType = {
    type: ProtoType.string,
    size: ProtoType.oneOf(['large', 'default', 'small']),
    disabled: ProtoType.bool,
    value: ProtoType.any,
    defaultValue: ProtoType.any,
    className: ProtoType.string,

    onPressEnter: ProtoType.func,
    onChange: ProtoType.func,
    onClick: ProtoType.func,
    onFouce: ProtoType.func,
    onBlur: ProtoType.func
  }

  renderInput () {
    const { value, className } = this.props

    

    return (
      <input />
    )
  }

  render () {
    return this.renderInput()
  }
}