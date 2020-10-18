import React from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const OrderDetails = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [logInUser,setLogInUser] = useContext(userContext);

    const history = useHistory();
    const onSubmit = data => {
           history.push("/service")
        fetch('http://localhost:5000/addOrder',{
            method:"POST",
             headers: {"content-type":"application/json"},
             body:JSON.stringify(data)    
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    };
    
    return (
        <div style={{marginLeft:"10px",marginTop:"20px"}}>
           <form onSubmit={handleSubmit(onSubmit)}>
     <input name="name" defaultValue={logInUser.name}  ref={register({ required: true })} placeholder="your name/company" />
       {errors.name && <span className="error" >name field is required</span>}
      <br/> <br/>
       <input name="email" defaultValue={logInUser.email}  ref={register({ required: true })} placeholder="your email address" />
       {errors.email && <span className="error" >email field is required</span>}
       <br/> <br/>
       <input name="course" defaultValue=""  ref={register({ required: true })} placeholder="Course name" />
       {errors.courseName && <span className="error" >this field is required</span>}
       <br/><br/>
       <input style={{width:"200px",height:"100px"}} name="text" defaultValue=""  ref={register({ required: true })} placeholder="project details" />
       {errors.text && <span className="error" >this field is required</span>}
       <br/><br/>
       <input name="price" defaultValue=""  ref={register({ required: true })} placeholder="price" />
       {errors.text && <span className="error" >this field is required</span>}
      
       <br/><br/>
      
      <input type="submit" value="Send" />
    </form>
        </div>
    );
};

export default OrderDetails;