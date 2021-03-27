import React, { Component } from 'react';
import { some } from "./another";
import {test} from "./another";
import ReactDOM from "react-dom";
import "./counter.css";
import ValueDisplay from "./valueDisplay";
import Another from "./another";

class Counter  extends Component {
    state={
        count:0
    }

    /*style={
        fontSize:"20px",
        fontWeight:"bold",
        color:"blue"
        
     
    };*/
     eventHandle=()=>{
         if(this.state.count==30){
            this.state.count=0;
         }
         //this.state.count++;
        this.setState({
            count:this.state.count+1
        });
        
    }
   
    render() { 
       return( <span  className="name ">{this.initialize()}
        <button onClick={this.eventHandle} > {some(this.state.count)}</button> </span>);
      // return(<Another/>);
    }
    initialize(){
        const value=this.state.count;
        if(value==0){
            return(<span>zero</span>);
        }
        else if(value==30){
            
        return (<span>thats enough brother</span>);
     
        }
        else{
            return(<span>{value}</span>);
        }
    }
}
 
export default Counter;