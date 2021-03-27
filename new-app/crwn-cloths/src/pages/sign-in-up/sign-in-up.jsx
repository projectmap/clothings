import React from "react";
import Signup from "../../components/sign up/signup";
import SignIn from "../../components/sign-in/sign-in-component";
import "./signinup.css";



const SignInUp=()=>{
    return(
        <div className="signinup"> 
           <div> <SignIn/></div>
           <div> <Signup/></div>
        </div>
    );
}
export default SignInUp;