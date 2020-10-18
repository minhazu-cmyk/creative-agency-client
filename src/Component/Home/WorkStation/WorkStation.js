import React from 'react';
import {Carousel} from '3d-react-carousal';
import first from '../../../images/carousel-1.png';
import second from '../../../images/carousel-2.png';
import third from '../../../images/carousel-3.png';
import four from '../../../images/carousel-4.png'; 
import five from '../../../images/carousel-5.png';


let slides = [
    <img style={{height:"300px",width:"400px"}}  src={first} alt="1" />,
    <img style={{height:"300px",width:"400px"}}  src={second} alt="2" />  ,
    <img style={{height:"300px",width:"400px"}}  src={third} alt="3" />  ,
    <img style={{height:"300px",width:"400px"}}   src={four} alt="4" />  ,
    <img style={{height:"300px",width:"400px"}}  src={five} alt="5" />   ];
const WorkStation = () => {
    return (
        <div className="d-flex justify-content-center ">
         
        <section  style={{height:"450px",width:"800px", backgroundColor:"#111430" }}>
        <h3 style={{color:"white", textAlign:"center",marginTop:"30px" }}> Here are some of our <span style={{color:'#7AB259'}}> work</span> </h3>
       <div style={{marginTop:"50px",padding:"0 .2em"}} >
      
       <Carousel  slides={slides} autoplay={true} interval={2000}/>
       </div>
       </section>
       </div>
    );
};

export default WorkStation;