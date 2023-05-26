import React,{useState,useEffect} from 'react';
import { ReactDOM } from 'react';



const Statewithfunc = () => {
    const [count, setCount] = useState(0);
  
    useEffect ( () => {
      document.title = count;
    });
    
    return (
      <div>
        
              <p> The current count is :- {count} </p>
              
        
  
        <button onClick={ () => setCount(count - 1)}> -1 </button>
        <button onClick={ () => setCount(0)}> Reset </button>
        <button onClick={ () => setCount(count + 1)}> +1 </button>
      </div>
  
    );
  }

export default Statewithfunc;