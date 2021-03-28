import React from "react";
//import {SHOP_DATA} from "./shop.data";
import PreviewCollection from "../components/previewcollection.component/previewcollection";

import { selectShopData } from "../redux/shop/shop.selector";
import CollectionOverview from "../components/collection-overview/collection-overview";
import {Route} from "react-router-dom";
import Collection from "./collection/collection";
const Shoppage=({match})=>{

        //const {collections}=shopData;
    
     return(
         <div className="shop-page">
                     <Route exact path={`${match.path}`} component={CollectionOverview}/>
          <Route path={`${match.path}/:collectionId`}  component={Collection}/> 
         </div>
         

     )
     };
  
export default Shoppage;