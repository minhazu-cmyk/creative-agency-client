import React from 'react';
import { Link } from 'react-router-dom';
import agency from '../../../../../images/logos/agency.png'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto ml-5">
      <li class="nav-item">
          <img style={{ height:"50px",width:"100px"}} src={agency} alt=""/>
           
          </li>
          </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#"> Our Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">Our Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5 " href="#">Contact us</a>
          </li>
          <li class="nav-item">
          <Link to="/order"> <button style={{backgroundColor:"black", borderRadius:"5px" }}> <a class="nav-link mr-5 text-white" >Log In</a> </button> ,</Link>
          </li>
          
          
        </ul>
        
      </div>
    </nav>
    );
};

export default NavBar;