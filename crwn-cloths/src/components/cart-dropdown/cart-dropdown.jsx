import React from "react";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.css";
import {connect} from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import {withRouter} from "react-router-dom";
import { cartToggle } from "../../redux/cart/cart.actions";


const CartDropDown=({cartitems,cartselect,history,toggle})=>(
    <div className="cart-dropdown">
      
        <div className="cart-items">
        {
             cartselect.length?
             cartselect.map((item)=>(
                 <CartItem key={item.id} item={item}/>
            ) 
             ):<div className="empty"> Your cart is empty!</div>

      }
        </div>
        <div className="check-out-button" ><div onClick={()=>{history.push("./checkout");
            toggle();}}>

        <CustomButton  custombutton="custombuttonNormal">check out</CustomButton>
        </div>
        
        
        </div>
       
    </div>
)


    const mapStateToProps=(state)=>({
        //cartitems:state.cart.cartItems,
        cartselect:selectCartItems(state)
    })
    const mapDispatchToProps=(dispatch)=>({
        toggle:()=>dispatch(cartToggle())
    })


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown));