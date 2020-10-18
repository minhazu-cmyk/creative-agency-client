import React from 'react';

const Footer = () => {
    return (
        <div style={{marginTop:"100px",textAlign:"center",backgroundColor:"#FBD062",height:"500px"}} className=" row d-flex justify-content-center  " >
            <div style={{marginTop:"100px"}} className=" row d-flex justify-content-center  " >
            <div className="col-md-6">
             <h3> Let us handle your <br/>project personally</h3>
            <p> <small>with well written codes we builds amazing apps for all <br/> platform , mobile and web apps in general </small></p>
            </div>
            <div className="col-md-6">
                <form>
               <input style={{width:"400px",margin:"5px"}} type="email" name="email" id="" placeholder="Your email address" />  

               <input style={{width:"400px",margin:"5px"}} type="name" name="name" id="" placeholder="Your name/company name"    />

               <input  style={{height:"200px", width:"400px",margin:"5px"}} type="text" placeholder="Your messege" /> <br/>  

               <input style={{backgroundColor:"black", marginRight:"335px", color:"white",width:"70px",borderRadius:"5px"}} type="submit" value="send"/>
               </form>
            </div>
            </div>
            <p>copyright orange labs 2020</p>
        </div>
    );
};

export default Footer;