import React from 'react';
import { useForm } from "react-hook-form";

const OrderReviewDetails = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div style={{marginLeft:"10px",marginTop:"20px"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
  <input name="name" defaultValue="" ref={register({ required: true })} placeholder="your name/company" />
    {errors.name && <span className="error" >name field is required</span>}
   <br/> <br/>
    <input name="company" defaultValue=""  ref={register({ required: true })} placeholder="your company name is required" />
    {errors.email && <span className="error" >email field is required</span>}
    <br/> <br/>
    
    <input style={{width:"200px",height:"60px"}} name="text" defaultValue=""  ref={register({ required: true })} placeholder="Description" />
    {errors.description && <span className="error" >this field is required</span>}
    <br/><br/>
    
   
   <input type="submit" value="Send" />
 </form>
 </div>
    );
};

export default OrderReviewDetails;