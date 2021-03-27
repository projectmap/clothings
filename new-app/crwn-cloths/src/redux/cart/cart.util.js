export const addItemsInCart=(cartItems,itemToAdd)=>{
const existingItem=cartItems.find(items=>
    items.id===itemToAdd.id
    );
 
  
if(existingItem){
    return cartItems.map((item)=>
       ( item.id===itemToAdd.id?{...item,quantity:item.quantity+1}
        :item

    
    ));
}else{
    return [...cartItems,{...itemToAdd,quantity:1}]
}

};





export const remove=(item,cartItems)=>{
     
    return cartItems.filter((items)=>items.id!==item.id)
};


export const decrease=(cartItems,itemToDecrease)=>{
    const existingItem1=cartItems.find(items=>
        items.id===itemToDecrease.id
        );
     
      
    if(existingItem1){
        return cartItems.map((item)=>
           ( item.id===itemToDecrease.id?{...item,quantity:item.quantity-1}
            :item
    
        
        ));
    }else{
        return [...cartItems]
    }
    
    
};