import {createSelector} from "reselect";



 export const selectShop=(state)=>state.shop;

 export const selectShopData=createSelector(
     [selectShop],
     (shop)=>shop.collections
 );

 const ID_MAP_FOR_COLLECTION={
     hats:1,
     sneakers:2,
     jackets:3,
     mens:5,
     womens:4
 };

 export const selectCollection=(collectionId)=>createSelector(
     [selectShopData],
     collections=>collections.find(collection=>collection.id===ID_MAP_FOR_COLLECTION[collectionId])
 );