import React from 'react'

import SitterFilter from '../components/SitterFilter'
import LogoWithLogout from '../components/LogoWithLogout'


const NontSitter = () => {

    return (
        <div style={{backgroundColor:"#F1F9FF"}}>
            <LogoWithLogout/>
            <SitterFilter/>
        </div>
    )

}

export default NontSitter