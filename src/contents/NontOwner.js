import React, {useState, useEffect} from 'react'
import Searchfilter from '../components/Searchfilter'
import Logo from '../components/Logo'
import Navbar_logout from '../components/Navbar_logout'
import { useParams } from 'react-router-dom'

const NontOwner = (props) => {
    let {user_id} = useParams()
    return (
        <div>
            <Logo />
            <Navbar_logout />
            <Searchfilter user_id={user_id}/>
            {console.log(user_id)}
        </div>
    )
}
export default NontOwner