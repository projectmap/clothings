import React from "react";
import "./test.css";

const test=()=>{
   return( <div className="outer">
        <div className="heading">
            <p> header</p>
        </div>
        <div className="bodyleft">
        <p> left part</p>

        </div>
        <div className="bodyright">
               <div className="blocks">block1</div>
               <div className='blocks'>block2</div>
        </div>
        <div className="footer">
        <p> footer</p>
        </div>

        <div className="next">
            <div className="row"><p>row1</p>
            </div>
            <div className="row"><p>row2</p>
            </div>
            <div className="row"><p>row3</p>
            </div>
            <div className="rows">
                   <div className="bl"><p>bl1</p></div>
                   <div className="bl"><p>bl2</p></div>
            </div>
        </div>
    

    </div>
   );
}
export default test;