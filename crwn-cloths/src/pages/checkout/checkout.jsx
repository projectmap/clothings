import React from "react";
import "./checkout.css";
import {connect} from "react-redux";
import { selectCartItems, selectTolalCart } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";

import StripePay from "../../components/stripe/stripe";


const CheckOut=({cartselect,totalprice})=>{
    

    return(
        <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>product</span>
                </div>
                <div className="header-block">
                <span>description</span> 
                 </div>
                <div className="header-block">
                <span>quantity</span>  
                </div>
                <div className="header-block">
                <span>price</span> 
                 </div>
                <div className="header-block">
                <span>remove</span>
                </div>
            
            <div>
             
            </div>
          
           <div>
              
           </div>
        </div>
     {
         cartselect.map((item)=>(<CheckoutItem allcart={cartselect}itemofCart={item} key={item.id}/>)
         )
     }
        <div className="total">TOTAL:${totalprice}</div>
        <div className="test-mesg">
            *Please use following card*<br/>
            4242 4242 4242 4242 exp:01/20 CVV:123
        </div>
        <div className="button"><StripePay  price={totalprice}/></div>
        
        </div>
    );
}
   const mapStateToProps=(state)=>({
       cartselect:selectCartItems(state),
       totalprice:selectTolalCart(state)
   })

export default connect(mapStateToProps)(CheckOut);