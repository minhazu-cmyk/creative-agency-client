import React from 'react';
import SideBar from '../SideBar/SideBar';
import OrderReviewDetails from './OrderReviewDetails';

const OrderReview = () => {
    return (
        <div className="row">
           <div className="col-md-2 col-sm-6 col-12">
               <SideBar></SideBar>
               </div> 
               <div  style={{marginLeft:"100px",border:"1px solid gray",height:"300px",width:"300px",marginTop:"50px",backgroundColor:"#F4F7FC"}} className="col-md-7 col-sm-12 col-12">
                 <OrderReviewDetails></OrderReviewDetails>
               </div>
        </div>
    );
};

export default OrderReview;