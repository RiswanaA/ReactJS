import React from 'react';
class Namaste extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }

    }
    increase=()=>{
        this.setState({counter:this.state.counter+1})
    }
    decrease=()=>{
        this.setState({counter:this.state.counter-1})
    }

    componentDidMount=()=>
    {
        console.log("MOUNTED");
    }
    componentDidUpdate=()=>
    {
        console.log("UPDATED");
    }
    componentDidCatch=()=>
    {
        console.log("CAUGHT");
    }
    render(){
        return(
            <div>
                NAMASTE!!!
                
                <h2>{this.state.counter}</h2>
                <button className="btn1" onClick={  this.decrease}> DECREASE</button>
                <br/><br/>
                <button className="btn1"  onClick={  this.increase}> INCREASE </button>
                
            </div>
        );
    }
}
export default Namaste;