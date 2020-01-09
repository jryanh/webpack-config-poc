import React from 'react'

import Button from '../../atoms/button/Button.jsx'

const Buybox = ({ price }) => {
  return (
    <div>
      <h4>{price}</h4>
      <Button>In den Warenkorb</Button>
    </div>
  )
}

export default Buybox
