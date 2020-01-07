import React from 'react'

import './image.scss'

const Image = props => (
  <div
    className="image"
    style={{ width: props.width, height: props.height }}
  ></div>
)

export default Image
