import React from 'react';
import first from '../../../images/customer-1.png';
import second from '../../../images/customer-2.png';
import third from '../../../images/customer-3.png';
import ClientFeedBackDetails from './ClientFeedBackDetails';



const feedBack=[
    {
        name:"nash patrik",
        img: first,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit ."
    },
    {
        name:"Miriam Barron",
        img:second ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        name:"Bria Malone",
        img:third ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    

]
const ClientFeedBack = () => {
    return (
        <div class="mt-5">
            <h3 style={{textAlign:'center', }} > client  < span style={{color:'#7AB259', }}>feedBack</span></h3>
        <section style={{textAlign:'center', marginTop:"30px", marginLeft:"130px"}} className="d-flex justify-content-center ">
            
        <div  className="row  ">
            {
                feedBack.map(x=><ClientFeedBackDetails item={x}></ClientFeedBackDetails>)
            }
        </div>
        </section>
        </div>
    );
};

export default ClientFeedBack;