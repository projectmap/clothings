
import Counter from "./counter";
import ValueDisplay from "./valueDisplay";


    export  function some(nub){
        let x=nub;
        let y=30-x;
        if(y==0){
            return (<div> <h1>{"incrementer no more to go bro "} </h1></div>);
        }else 
        return (<div> <h1>{"incrementer"+y+" " +"more to go bro"} </h1></div>)
        ;
    }
    export default function test(){

        return(<h1><ValueDisplay/>form test </h1>);
    }