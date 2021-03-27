import React from "react";
import {SHOP_DATA} from "../../pages/shop.data";
import CustomButton from "../custom-button/custom-button.component";
import "./collectionitem.css";


class Collectionitem extends React.Component{
  constructor(){
      super();
      this.state={
          collection:SHOP_DATA
      }
  }
  render(){
    return(<div className="frame">
    <div className="inframe">
        {
            this.state.collection.map((collections)=>{
                return(
                    <div className="itembox">
                         <span className="titles">{collections.title.toUpperCase()}</span>
                         <div className="outframe"  
                           >{
                            
                             collections.items.filter((item)=>item.id<5).map((item)=>{
                                  return(
                                      <div className="item1"  style={{
                                        backgroundImage:`url(${item.imageUrl})`
                             }}>
                               
                                         {item.name}
                                      </div>
                                  )
                             }
                             )
                         }</div>
                    </div>
                )
            }
            )
        }

    </div>


    </div>);


  }


}
export default Collectionitem;