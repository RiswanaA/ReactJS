// import React,{ useState } from "react";
import './Content.css';

function Main(props) {
    
    return (

<div className="container">

      <div className="card">
        <div className="image-card">
        <img src="images/download.png" alt="amazon_logo" />
        </div>
        <div className="card-content">
             <button onClick={()=>{props.setCartCounter(props.cartCounter + 1)}}>ADD TO CART</button> 
             
            
        </div>
        
     </div> 
    </div>
    );
}

export default Main;