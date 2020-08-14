import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
// import './Layout.css'

const Layout = (props) => {
    return (
    <div className="Layout-component">  
        <NavBar username={props.username}/>
        <div className="LayoutContainer">
        {props.children}
        </div>
        <Footer />
    </div>
    )};

    export default Layout