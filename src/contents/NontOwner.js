import React, {useState, useEffect} from 'react'
import Searchfilter from '../components/Searchfilter'
import Searchinfo from '../components/Searchinfo'
import Logo from '../components/Logo'
import Navbar_logout from '../components/Navbar_logout'

const NontOwner = () => {
    return (
        <div>
            <Logo />
            <Navbar_logout />
            <Searchfilter />
            {/* <Searchinfo /> */}
        </div>
    )
}
export default NontOwner