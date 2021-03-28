import React from "react";
import "./collectionitem.css";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import { addItems } from "../../redux/cart/cart.actions";







const Collectionitems=({item,addToCart})=>{
    const {name,price,imageUrl } =item;

    return(
        <div className="itemcollect">
          <div className="image1" style={{
            backgroundImage:`url(${imageUrl})`
        }}>
            <div className="forbutton">
                <div onClick={()=>addToCart(item)}>
                    <CustomButton  custombutton="custombuttonNormal">Add to cart</CustomButton></div></div>
             
             </div> 
         <div className="footer">
             <span className="itemname">{name}</span>
                <span className="price">{"$"+price}</span>       
         </div>

        </div>
    );
}


 const mapDispatchToProps=(dispatch)=>({
       addToCart:(item)=>dispatch(addItems(item))
 });
export default connect(null,mapDispatchToProps)(Collectionitems);