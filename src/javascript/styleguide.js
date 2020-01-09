import React from 'react'
import ReactDOM from 'react-dom'

import Button from '../components/atoms/button/Button.jsx'
import Headline from '../components/atoms/headline/Headline.jsx'
import Image from '../components/atoms/image/Image.jsx'
import Link from '../components/atoms/link/Link.jsx'
import Pagination from '../components/atoms/pagination/Pagination.jsx'
import Teaser from '../components/atoms/teaser/Teaser.jsx'

const components = [Button, Headline, Image, Link, Pagination, Teaser]

const Showcase = () => {
  return (
    <>
      {components.map(Component => (
        <div
          style={{ border: '1px solid black', margin: '20px', padding: '10px' }}
        >
          <Component />
        </div>
      ))}
    </>
  )
}

console.log('TESTING')

ReactDOM.render(<Showcase />, document.querySelector('#root'))
