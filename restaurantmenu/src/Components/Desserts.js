import React from 'react';
class Desserts extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <h3>DESSERTS --PROPS HERE--{this.props.brand}</h3>
                <li className='Items'><button> SHAKES </button>&nbsp;&nbsp;CHOCO&nbsp;&nbsp;&nbsp;<button className='Buttonstyle'> INR 250 </button> </li><br></br>
            </div>
        )
    }
}
export default Desserts;
