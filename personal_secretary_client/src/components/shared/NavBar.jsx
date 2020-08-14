import React from 'react'
import { Link } from "react-router-dom";
// import "./Navbar.css";

const NavBar=()=>{
    return(
    <div className='navbar'>
        <nav>
            <Link to='/'>Home</Link>
        </nav>
    </div>
    )
}

export default NavBar