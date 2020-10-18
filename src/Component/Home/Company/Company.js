import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netlify from '../../../images/logos/netflix.png';
import Airnab from '../../../images/logos/airbnb.png';



const Company = () => {
    return (
    <div className="row d-flex justify-content-center ml-5 pt-5 pl-5 w-75" >
      <div className="col-md-2">
          <img style={{ height:"30px",width:"50px"}} src={slack} alt=""/>
      </div>
      <div className="col-md-2">
     <img style={{ height:"50px",width:"50px"}} src={google} alt=""/>
      </div>
      <div className="col-md-2">
      <img style={{ height:"50px",width:"50px"}} src={uber} alt=""/>
      </div>
      <div className="col-md-2">
      <img style={{ height:"50px",width:"50px"}} src={netlify} alt=""/>
      </div>
      <div className="col-md-2">
      <img style={{ height:"50px",width:"50px"}} src={Airnab} alt=""/>
      </div>
      
    </div>
    );
};

export default Company;