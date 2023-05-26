import React ,{useState,useEffect} from "react";
import './Subheader.css';
function Subheader() {

    const [hover, setHover]=useState(false);
    
    const mouseEnter=()=>{
        setHover(true);
        // console.log("mouse entered");
        // {setStyle};
        // "background-color"="red";
        // "background-color" : hover? "red":"none";
    }

    const mouseLeave=()=>{
        setHover(false);
    }
    //  let setStyle={
    // //     // document.body.style.background : hover? " red" :"none" 
    // //     // hover? "background-red":"none"
    //  "background-color": hover? "red":"none"
    //  }

    let boxStyle = {
        
        backgroundColor: hover ? "lightblue" : "green"
        // color: hover ? 'red' : 'green'
     }
    return (

<div className="subheader"  >
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={boxStyle} >All</div>
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={boxStyle}>Today's Deals</div>
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={boxStyle}>Customer Service</div>
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={boxStyle}>Registry</div>
        <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={boxStyle}>Gift Cards</div>
    </div>
    );}

    export default Subheader;
