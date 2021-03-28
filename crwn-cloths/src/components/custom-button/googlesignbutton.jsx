import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
//import { signInWithGoogle } from '../../firebase/firebase.utils';
import "./custom-button.css";

 const CustomButton1=({children,...otherprops})=>{
    
     return(
         <button  onClick={signInWithGoogle} className="custombutton">
             {children}

             </button>
             
             

     );
 }
 export default CustomButton1;