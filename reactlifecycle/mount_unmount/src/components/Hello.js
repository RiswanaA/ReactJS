import React, { useState } from 'react';
function Hello(){
    const [counters,setCounters]=useState(0);
    return(

        <div>
        <h2> HELLO WORLD!!</h2>
       <button id="btn1" onClick={()=> setCounters(counters+1)}>CLICK HERE</button>
                 <p>{counters}</p>
                 
        
        </div>
    )
}
export default Hello;