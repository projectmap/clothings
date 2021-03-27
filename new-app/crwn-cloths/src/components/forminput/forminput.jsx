import React from "react";
import "./forminput.css";


const Forminput=({handleChange,label,name,value,...othervalues})=>{
    let namefor;
       if(othervalues.length===0){
           namefor="shrinkform";
       }else 
       namefor="normform";
    return( 

    
        <div className="group">{
            label?<label className={namefor}>{label}</label>:null
          }
            <input className="input" name={name} type={othervalues.type} value={value} editable onChange={handleChange} {...othervalues}/>
         
         

        </div>
    );
}
export default Forminput;