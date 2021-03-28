import cartTypes from "./cart.types"

export  const cartToggle=()=>({
    type:cartTypes.TOGGLE_MENU
}
)
export const counter=(value)=>(
    {
        type:cartTypes.count,
        payload:value
    }
)
export const addItems=(item)=>(
    {
        type:cartTypes.addItems,
        payload:item
    }
)
export const removeItems=(item)=>({
    type:cartTypes.REMOVE_ITEMS,
    payload:item
})

export const decrementItems=(item)=>({
    type:cartTypes.DECREMENT_ITEMS,
    payload:item
})