import React from 'react';
import { Link } from 'react-router-dom';
import './CourseDetalis.css';
const CourseDetails = (props) => {
    const{title,description,img}=props.item;
    return (
     <div class="col-md-4 ">
  <Link to="/order" >  <img className="ml-5" style={{ height:'50px',width:'50px',}} src={img} alt=""/>
  <div class="card-body">
    <h5 class="card-title">{title} </h5>
    <p class="card-text"> {description} </p>
    
  </div>
  </Link>
</div>

        
    );
};

export default CourseDetails;