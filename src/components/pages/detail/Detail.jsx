import React from 'react'

import Button from '../../atoms/button/Button.jsx'
import Image from '../../atoms/image/Image.jsx'
import Headline from '../../atoms/headline/Headline.jsx'

const ProductDetailPage = () => {
  return (
    <div>
      <Headline>ProductDetailPage</Headline>
      <Image width="250px" height="200px" />
      <p>
        Aute reprehenderit cillum ullamco ipsum anim mollit sint proident.
        Exercitation aute fugiat eiusmod ut. Eiusmod commodo aliqua sunt ea
        tempor amet velit nisi dolore sit mollit tempor consequat.
      </p>
      <Button>Buy now</Button>
    </div>
  )
}

export default ProductDetailPage
