import React from 'react';

const ClientFeedBackDetails = (props) => {
    const {name,img,description} = props.item;
    return (
        <div style={{border:"1px solid gray",  margin:'5px',borderRadius:"5px", }} className="col-md-3 d-flex justify-content-center ">
      <img style={{ height:'50px',width:'50px',}} src={img} alt=""/>
  <div class="card-body">
      <h5> {name} </h5>
      <p> <strong> CEO, Monpol</strong>  </p> 
    <p> {description} </p>
  </div>
</div>
    );
};

export default ClientFeedBackDetails;