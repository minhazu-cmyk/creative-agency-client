import React from 'react';
import CourseDetails from './CourseDetails';
import webDesign from '../../../images/icons/mobile.png';
import graphic from '../../../images/icons/graphic.png';
import development from '../../../images/icons/webdevelopment.png';

const courseInfo = [
    {
        title:'web and mobile design',
        img: webDesign,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse, vero ad tempore consectetur sed!'
    },
    {
        title:'Graphic design',
        img:graphic,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse, vero ad tempore consectetur sed!'
    },
    {
        title:'web development',
        img:development,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse, vero ad tempore consectetur sed!'
    },

]
const Courses = () => {
    return (
        <div class="mt-5">
            <h3 className="d-flex justify-content-center  "> provide awesome  < span style={{color:'#7AB259', padding:"4px"}}>services</span></h3>
        <section className="d-flex justify-content-center ">
            
        <div className="row w-75  ">
            {
                courseInfo.map(x=><CourseDetails item={x}></CourseDetails>)
            }
        </div>
        </section>
        </div>
    );
};

export default Courses;