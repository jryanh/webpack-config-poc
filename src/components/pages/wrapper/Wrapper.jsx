import React from 'react'

import Header from '../../organisms/header/Header.jsx'

const Wrapper = ({children}) => {

    return <>
        <Header />
        {children}
        <footer>footer</footer>
    </>
}

export default Wrapper
