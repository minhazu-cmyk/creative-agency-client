import React from 'react';
import OrderDetails from '../OrderDetails/OrderDetails';
import SideBar from '../SideBar/SideBar';

const OrderList = () => {
    return (
        <section>
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <SideBar></SideBar>
            </div>
           
            <div style={{marginLeft:"100px",border:"1px solid gray",height:"400px",width:"300px",marginTop:"50px",backgroundColor:"#F4F7FC"}} className="col-md-7 col-sm-12 col-12">
                
                <OrderDetails></OrderDetails>
            </div>
        </div>
    </section>
    );
};

export default OrderList;