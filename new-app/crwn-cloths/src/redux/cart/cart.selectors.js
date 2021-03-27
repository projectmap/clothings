import {createSelector} from "reselect";



const selectCart=(state)=>state.cart;
export const selectCartItems=createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce(
        (sum,item)=>sum+item.quantity
        ,0
    )
);
 export const selectTolalCart=createSelector(
     [selectCartItems],
     (cartItems)=>cartItems.reduce(
         (total,item)=>total+item.quantity*item.price
     ,0)
 );