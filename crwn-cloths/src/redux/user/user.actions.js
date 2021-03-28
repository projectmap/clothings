import {actionTypes} from "./actiontypes";
export const setCurrentUser=user=>({
   
    type: actionTypes.SET_CURRENT_USER,
    payload: user
});