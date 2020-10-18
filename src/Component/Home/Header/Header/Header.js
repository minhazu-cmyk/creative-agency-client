import React from 'react';
import Headerdetails from './Headerdetails';
import NavBar from './NavBar/NavBar';

const Header = () => {
    return (
        <div style={{backgroundColor:"#FBD062"}}>
            <NavBar></NavBar>
           <Headerdetails></Headerdetails> 
        </div>
    );
};

export default Header;