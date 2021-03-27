import cartTypes from "./cart.types";
import { addItemsInCart, decrease } from "./cart.util";
import {remove} from "./cart.util";
const InitialState={
    hidden:true,
    count:0,
    cartItems:[]
};

const cartReducer=(state=InitialState,action)=>{
    switch(action.type){
    case cartTypes.TOGGLE_MENU:
        return{
            ...state,
            hidden:!state.hidden

        }
        case cartTypes.count:
            
              return{
                  ...state,
                  count:action.payload+state.count
              }
            
        case cartTypes.addItems:
            return{
                ...state,
                cartItems:addItemsInCart(state.cartItems,action.payload)
            }
            case cartTypes.REMOVE_ITEMS:
                return{
                    ...state,
                    cartItems: remove(action.payload,state.cartItems)
                }

                case cartTypes.DECREMENT_ITEMS:
                    return{
                        ...state,
                        cartItems:decrease(state.cartItems,action.payload).filter((items)=>items.quantity!==0 )
                    }
        default:
            return state;
    }
};

export default cartReducer;