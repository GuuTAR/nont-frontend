import React, {useState, useEffect} from 'react'
import logo from '../logo.svg';

import { Button } from 'react-bootstrap'

const React_test = () => {

    const [hasError, setErrors] = useState(false)
    const [users, setUsers] = useState({})

    async function fetchData() {
        const res = await fetch('https://randomuser.me/api/')
        res.json()
            .then(res => setUsers(res))
            .catch(err => setErrors(err))
    }

    useEffect(() => {
        fetchData()
        console.log(users)
    })

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Nont, The community of pet lover
                </h1>
                <h1>
                    Test bootstrap
                </h1>
                <>
                    <Button variant="outline-primary">Primary</Button>{' '}
                    <Button variant="outline-secondary">Secondary</Button>{' '}
                    <Button variant="outline-success">Success</Button>{' '}
                </>
                <h1>Test fetch api</h1>

            </header>
        </div>
    )
}

export default React_test