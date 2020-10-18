import React from 'react';
import SideBar from '../SideBar/SideBar';
import ServiceDetails from './ServiceDetails';
const ServiceList = () => {
    return (
        <div className="row">
           <div className="col-md-2">
            <SideBar></SideBar>
           </div>
           <div className="col-md-10 d-flex justify-content-center">
               
            <ServiceDetails></ServiceDetails>
                 
           </div>

        </div>
    );
};

export default ServiceList;