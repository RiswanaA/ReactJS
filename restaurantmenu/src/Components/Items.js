import React from 'react';
// import './src/App.cs'
import '../App.css';
function Items(){
    return(
        <div>
        <li className='Items'><button>VEG </button>&nbsp;&nbsp;FRUIT SALAD &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='Buttonstyle'> INR 150 </button> </li><br></br>
        <li className='Items'><button>DRINK</button>&nbsp;&nbsp;ORANGE JUICE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='Buttonstyle'> INR 100 </button></li><br></br>
        {/* <h3>MAIN COURSE--PROPS HERE- {props.brand}</h3> */}
        
        <li className='Items'><button>NON VEG</button>&nbsp;&nbsp;BIRIYANI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='Buttonstyle'> INR 400 </button></li><br></br>
         
        </div>
    )
}

export default Items;