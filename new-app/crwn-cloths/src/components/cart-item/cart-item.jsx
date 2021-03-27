import React from "react";
import "./cart-item.css";



const CartItem=({item:{name,imageUrl,price,quantity}})=>{
    return(
        <div className="cart-item">
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
                <span>{name}</span>
                <span>{quantity}x${price}</span>
            </div>

        </div>
    );
}
export default CartItem;