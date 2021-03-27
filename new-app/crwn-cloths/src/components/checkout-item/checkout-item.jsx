import React from "react";
import "./checkout-item.css";
import {connect} from "react-redux";
import { addItems, decrementItems, removeItems } from "../../redux/cart/cart.actions";





const CheckoutItem=({itemofCart,decrement,add,remove})=>
{
    const {name,quantity,price,imageUrl}=itemofCart;

return(
    <div className="checkout-item">
   <div className="image-container">
       <img src={imageUrl}alt="item"/>

   </div>
   <span className="name">{name}</span>
   <span  className="quantity">
       <div onClick={()=>decrement(itemofCart)} className="arrow">&#10094;</div>
       <span className="value">{quantity}</span>
       <div onClick={()=>add(itemofCart)} className="arrow">&#10095;</div>
        </span>
   <span className="price"> {price}</span>
   <div onClick={()=>remove(itemofCart)} className="remove-button">&#10005;</div>
    </div>
);
}

   const mapDispatchToProps=(dispatch)=>({
           remove:(item)=>dispatch(removeItems(item)),
           add:(item)=>dispatch(addItems(item)),
           decrement:(item)=>dispatch(decrementItems(item))
         
   });

export default connect(null,mapDispatchToProps)(CheckoutItem);