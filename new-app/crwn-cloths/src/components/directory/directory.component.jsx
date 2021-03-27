import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.css";
import {connect} from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selector";




const Directory=({section1})=>
    
          {
               return(<div className="directory-menu">

            {section1.map(({imageUrl,title,id,size,linkUrl}) =>
            {return(
               
           <MenuItem title={title} url={imageUrl} key={id} size={size} linkUrl={linkUrl}/> 
                
            )}
            
            )
         }
         </div>
               
               );
           }



   const mapStateToProps=(state)=>({
     section1:selectDirectorySection(state)
   })

export default connect(mapStateToProps)(Directory);