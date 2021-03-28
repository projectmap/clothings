import React from "react";
import "./previewcollection.css";
import Collectionitems from "../collectionitems/collectionitems";
//import Collectionitem from "../collectionitems/collectionitem";
     
const PreviewCollection=({items,title,vals,key})=>{
      
    return(
        <div className="preview">
            <div className="titlepreview"><span className="headings">{ title.toUpperCase()}</span><span>{}</span>
            <div className="itemcollection">

                {
            
                    items.filter(item=>item.id%2===0).map((item)=>
                     <Collectionitems className="items" key ={item.id} item={item} />
                        )
                    
                    
                  
        
                }
              
                </div>
            </div>

        </div>
    ); 
}
export default PreviewCollection;