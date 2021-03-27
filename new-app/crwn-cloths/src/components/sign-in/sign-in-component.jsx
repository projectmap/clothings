import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import Forminput from "../forminput/forminput";
import "./signin.css";

class SignIn extends React.Component{
     constructor(){
         super();
         this.state={
             email:"",
             password:""
         }
     }
            handleSubmit= async(event)=>{
                event.preventDefault();
                const {email,password}=this.state;
               
                try{
                    await auth.signInWithEmailAndPassword(email,password);
                    this.setState({email:"",password:""});
                }catch(error){
                    console.log(error);
                }
               
                alert("hey");
            }
         
            handleChange=(e)=>{
                const { value,name}=e.target;
                this.setState({[name]:value});

            }
     render(){
         return(
             <div className="signin">
                 <span className="toptext">I already have an account</span>
                 <span className="lowertext">Sign in with your email and password</span>
                 <form onSubmit={this.handleSubmit} >
                  <Forminput type="email" label="email"  name="email"  required value={this.state.email} handleChange={this.handleChange}/>
                 
                 <Forminput type="password" editable name="password" label="password" value={this.state.password} required handleChange={this.handleChange}/>
                 <CustomButton custombutton="custombuttonNormal" handle={this.handleSubmit}   name="submit" > Sign In</CustomButton>
                 <CustomButton  custombutton="custombuttonGoogle" handle={signInWithGoogle} name="google" >  Google</CustomButton>
                
                   
                 </form>
                
                
             </div>
         );
     }
     


}
export default SignIn;