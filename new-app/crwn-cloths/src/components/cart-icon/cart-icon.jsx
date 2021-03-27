import React from "react";
import {ReactComponent as Shoppingicon} from "../../assets/shopping-bag.svg";
import "./cart-icon.css";
import{connect} from "react-redux";
import {cartToggle, counter} from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon=({togglemenu,count,countItems})=>{
    
    return(<div className="cart-icon" onClick={()=>togglemenu()}>
       <Shoppingicon className="shopping-icon"/>
        <span className="item-count">{countItems}</span>
    </div>
    );
}



const mapStateToProps=(state)=>(
    {
       hidden:state.cart.hidden,
       countItems:selectCartItemsCount(state)
       //count:state.cart.cartItems.reduce((sum,item)=>
         //   sum+item.quantity
       //,0)
    }
)

const mapDispatchToProps=(dispatch)=>(
    {
        togglemenu:()=>dispatch(cartToggle()),
        counter:(val)=>dispatch(counter(val))
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
