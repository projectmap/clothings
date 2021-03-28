import React from "react";
import PreviewCollection from "../previewcollection.component/previewcollection";
import {connect} from "react-redux";
import { selectShopData } from "../../redux/shop/shop.selector";


const CollectionOverview=({collections})=>{
          return(
              <div className="collection-overview">
              {  collections.map(({id,imageUrl,...others})=>{
                return(
                    <div>
                            <PreviewCollection key={id}  {...others} />
                    </div>
                );
            })
        }
              </div>
          );
};

 const mapStateToProps=(state)=>({
     collections:selectShopData(state)
 })
export default connect(mapStateToProps)(CollectionOverview);