import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar=()=>{
    return(
    <div >
        <nav className='navbar'>
            <Link to='/'><p className='navbarLinks'>Home</p></Link>
            <Link to='/history'><p className='navbarLinks'>History</p></Link>
        </nav>
    </div>
    )
}

export default NavBar