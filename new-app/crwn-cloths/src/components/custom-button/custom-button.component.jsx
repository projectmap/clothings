import React from 'react';
//import { signInWithGoogle } from '../../firebase/firebase.utils';
import "./custom-button.css";

 const CustomButton=({children,handle,custombutton,...otherprops})=>{
    
     return(
         <button  onClick={handle} className={custombutton}>
             {children}

             </button>
             
             

     );
 }
 export default CustomButton;