import React from 'react';
import people from '../../../../images/logos/people.png'
import './Headerdetails.css'
const Headerdetails = () => {
    return (
        <div style={{height:'350px'}}  className="row d-flex align-items-center , main">
            <div className="col-md-5 ml-5">
            <h1>  Let's Grow Your <br/> Brand TO The <br/> Next Level </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, cumque.</p>
            <button style={{backgroundColor:"black",color:"white"}}>Hire us </button>
            </div>
            <div className="col-md-5">
             <img style={{height:'300px'}} src={people} alt=""/>
            </div>
        </div>
    );
};

export default Headerdetails;