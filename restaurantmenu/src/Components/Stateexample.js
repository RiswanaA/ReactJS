import React from 'react';
import { useState } from 'react';

class Stateexample extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            cartvalue: 0
        }

    }
    toincrease=()=>{
    
      this.setState({cartvalue:this.state.cartvalue+1})
        
     
    
    }
    render=()=>{
        return(
            <div>
            <h1>your cart have {this.state.cartvalue}</h1>
            <button onClick={this.toincrease}>CLICK HERE- CLASS COMPONENT</button>
            <h4>{this.state.cartvalue}</h4>
            </div>
        )
    }
}
export default Stateexample;