import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';


const ServiceDetails = () => {
    const [orders,setOrders] = useState([]);
    const [logInUser,setLogInUser] = useContext(userContext);

    useEffect(()=>{
        fetch("https://secure-dusk-25023.herokuapp.com/order?email="+logInUser.email)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div  className=" d-flex justify-content-center">
       {
           orders.map(x=> <div style={{height:'200px',margin:"5px",marginTop:"10px"}} class="card" >
           
           <div class="card-body">
             <h6> {x.course} </h6>
             <p class="card-text">{x.text} </p>

           </div>
         </div> )
       }
            
        </div>
    );
};

export default ServiceDetails;