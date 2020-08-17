import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar=()=>{
    return(
    <div >
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/history'>History</Link>
        </nav>
    </div>
    )
}

export default NavBar