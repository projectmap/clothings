import React from "react";
import {withRouter} from "react-router-dom";
import  "./menu-item.css";

                                   
                                   
                                   
    const MenuItem=({url,key,size,title,linkUrl,match,history})=>{
        let naming;
        if(size==="large"){
         naming="largeitem";
    }else 
       naming="menu-item";
                                   
                                   
                                return(   <div className={naming}  onClick={()=>history.push(`${match.url}${linkUrl}`)}>
                                    <div className="image" style={
                                    {
                                        backgroundImage:`url(${url})`
                                    }
                                }/>    
                                     <div className="content">
                                         <h1 className="title">{title.toUpperCase()}</h1>
                                        
                                         <span className="subtitle">shop now{match.url}</span>

                                     </div>
                                </div>
                                );
                                }
                                export default withRouter(MenuItem);