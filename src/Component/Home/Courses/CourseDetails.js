import React from 'react';
import './CourseDetalis.css';
const CourseDetails = (props) => {
    const{title,description,img}=props.item;
    return (
     <div class="col-md-4 ">
    <img className="ml-5" style={{ height:'50px',width:'50px',}} src={img} alt=""/>
  <div class="card-body">
    <h5 class="card-title">{title} </h5>
    <p class="card-text"> {description} </p>
    
  </div>
</div>

        
    );
};

export default CourseDetails;