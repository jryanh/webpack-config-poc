import React from 'react'

import './button.scss'

const Button = ({ children, onclick }) => (
  <button onClick={onclick}>{children}</button>
)

export default Button
