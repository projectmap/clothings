import React from "react";
import "./header.css";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";

import CartDropDown from "../cart-dropdown/cart-dropdown";


const Header=({currentuser,toggle})=>{
    return(
        <div className="header">
         <Link className="logo-container" to="/">
             <Logo className="logo"/>
         </Link>
         <div className="options">
             <Link className="option" to="/shop">
              SHOP
             </Link>
             <Link className="option" to="/shop">
                 CONTACT
                  </Link>
                 
                    {
                        currentuser?<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>:<Link className="option" to="/signin">SIGN IN</Link>
                    }
                   <CartIcon/>
         </div>
        {toggle?null:<CartDropDown/>}
     
        </div>

    );
}
  const mapStateToProps=state=>({
     currentuser:state.user.currentUser,
     toggle:state.cart.hidden
  });
export default connect(mapStateToProps)(Header);