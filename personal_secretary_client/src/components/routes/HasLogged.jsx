import React from 'react'
import {Link} from 'react-router-dom'

const HasLogged =()=>{
    return (
        <>
            <h1>Your Entry has been logged</h1>
            <h2><Link to='/'>Return Home</Link></h2>
            </>
    )
}

export default HasLogged