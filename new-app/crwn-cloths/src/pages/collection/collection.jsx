import React from "react";
import {connect} from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

import Collectionitems from "../../components/collectionitems/collectionitems";
import PreviewCollection from "../../components/previewcollection.component/previewcollection";
import "./collection.css";

const Collection=({collection,match})=>
     
(
   
   <div className="collection">
     
   <h2>{collection.title.toUpperCase()}</h2>
   
   <div  className="show-item">
   {
   collection.items.map(item=>
   <Collectionitems 
    item={item} key={collection.items.id} title={collection.title}/>)
   }
   <img src={collection.items.imageUrl}/>
   </div>
   <div>
      
   </div>
   </div>
);


const mapStateToProps=(state,ownProps)=>({
   collection:selectCollection(ownProps.match.params.collectionId)(state),
   
})
export default connect(mapStateToProps)(Collection);