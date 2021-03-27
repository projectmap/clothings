import some from "./another";
import Another from "./another";
 import Testing from "./test";

 export default function getIt() {
    const value =0;
    if (value=="0"){
      //return (<h1>{ "need some more direct round"}</h1>);
      return(<Testing/>)
    }else return( <h1>{value} </h1>);

    //return(<div className="test"><h1>working fine</h1></div>);
}

