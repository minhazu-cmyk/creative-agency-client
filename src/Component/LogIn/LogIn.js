import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import agency from '../../images/logos/agency.png'
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';



const LogIn = () => {
const [logInUser,setLogInUser] = useContext(userContext)
const history = useHistory();
const location = useLocation();
const { from } = location.state || { from: { pathname: "/" } };

    
if(firebase.apps.length===0){
  firebase.initializeApp(firebaseConfig);
}
    const handleGoogleSignIn=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
          const {displayName, email} = result.user;
          const signInUser = {name:displayName,email}
          setLogInUser(signInUser)
          history.replace(from)
          
       // ...
     }).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // The email of the user's account used.
       var email = error.email;
       // The firebase.auth.AuthCredential type that was used.
       var credential = error.credential;
       // ...
     });
    }
    return (
        <section style={{marginLeft:"350px",}}>
            <img style={{ height:"40px",width:"100px",marginLeft:"100px",marginTop:"100px",marginBottom:"40px"}} src={agency} alt=""/>
        <div style={{height:"250px",width:"350px", border:"1px solid gray", borderRadius:"5px"}}>
          <h6 style={{marginLeft:"130px",marginTop:"100px"}}>LogIn with</h6>  
      <button style={{marginLeft:"100px",borderRadius:"5px"}} onClick={handleGoogleSignIn}> <span> <img style={{height:"20px",width:"30px"}} src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/2659939281579738432-512.png" alt=""/> </span> continue with google </button>
      <p style={{marginLeft:"100px"}}> <small> Don't have an account? <span style={{color:"blue"}}>Create an account </span> </small></p>
        </div>
        </section>
    );
};

export default LogIn;