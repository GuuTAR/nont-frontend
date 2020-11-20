import React from 'react'

import SitterFilter from '../components/SitterFilter'
import LogoWithLogout from '../components/LogoWithLogout'
import { useParams } from 'react-router-dom'


const NontSitter = () => {
    let {user_id} = useParams()
    return (
        <div style={{backgroundColor:"#F1F9FF"}}>
            <LogoWithLogout/>
            <SitterFilter user_id={user_id}/>
        </div>
    )

}

export default NontSitter