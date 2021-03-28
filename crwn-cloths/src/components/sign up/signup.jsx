import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import Forminput from "../forminput/forminput";
import "./signup11.css";
import { auth, createUserProfileDocument} from "../../firebase/firebase.utils";


class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            confirmpass:""
        }
    }
    handlesubmit=async(event)=>{
       
        event.preventDefault();
        const {password,email,confirmpass}=this.state;
      
        if(password!==confirmpass){
            alert("password mismatch");
        }
       
    // alert(`${this.state.email}"password:"${this.state.password}"confirm:"${this.state.confirmpass}`);
       
           try{
               const {user}= await  auth.createUserWithEmailAndPassword(email,password);
              await createUserProfileDocument(user);

              this.setState({
                email:"",
                password:"",
                confirmpass:""
              })
           }catch(e){
               console.log(e);
           }
    
    
    }
    handleChange=(e)=>{
       const{value,name}=e.target; 
      
       this.setState({
           [name]:value
       });
      
    }
    render(){
         const{email,password,confirmpass}=this.state
        return(
            
            <div className="signup">
              
            
              <span className="toptext">I dont have an account</span>
                 <span className="lowertext">Sign up here...</span>
            <form onSubmit={this.handlesubmit}>
            <Forminput label="email" handleChange={this.handleChange}  editable type="email" value={email} name="email"/>
            <Forminput type="password" handleChange={this.handleChange} value={password}  label="password"   name="password"/>
            <Forminput type="password"  label="confirm"name="confirmpass" value={confirmpass}handleChange={this.handleChange}/>
            <CustomButton type ="submit" handle={this.handlesubmit} custombutton="custombuttonNormal">SIGN UP</CustomButton>
            </form>
        </div>
        );
       
    }
   
}
export default Signup;