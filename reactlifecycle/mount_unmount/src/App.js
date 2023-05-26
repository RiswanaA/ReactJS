// import logo from './logo.svg';
// import './App.css';
// // import Hello from './Hello';
// import Namaste from './Namaste';
// import React,{ useState } from 'react';
// import { ReactDOM } from 'react';



// function App() {
//   // const students=[
//   //   {
//   //     naming:"AAA",
//   //     id:"100"
//   //   },
//   //   {
//   //     naming:"BBB",
//   //     id:"200"
//   //   },
//   //   {
//   //     naming:"CCC",
//   //     id:"300"
//   //   }
//   // ]
  
   
  

//   // const students=[
//   //   {
//   //     id:001,
//   //     name:AAA
  
//   //   },
//   //   {
//   //     id:002,
//   //     name:BBB
//   //   },
//   //   {
//   //     id:003,
//   //     name:CCC
  
//   //   }
//   // ]

//   const [showDiv, setshowDiv] = useState(false);
 
  
     
      
  
  
//   return (
//     <div className="App">
//       {/* <Hello nameofperson={students.map (( i )=> {i.naming},{i.id}></Hello> */}
//       {/* // <Namaste nameofperson={students.map ( i => i.naming,i=>i.id)}></Namaste> */}
//       {/* <Hello person={students.map (( i )=> i.naming)}></Hello>  */}
//       {/* <h4>{students.map (( i )=> i.naming)}</h4> */}
//         {/* <button onClick={ () => setCount(count - 1)}> -1 </button>
//         <button onClick={ () => setCount(0)}> Reset </button>
//         <button onClick={ () => setCount(count + 1)}> +1 </button> */}
        
//         <button className="btn"onClick={()=>setshowDiv(true)}>MOUNT </button><br/><br/>
//         <button className="btn" onClick={()=>setshowDiv(false)}>UNMOUNT </button><br/><br/>
//         { showDiv ? <Namaste /> : null }
          
        
//        </div>
  
//   );
//       }

// export default App;


import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import Hello from './components/Hello';
import React,{ useState, useEffect , useContext} from "react";
import { ReactDOM } from 'react';
import Namaste from './components/Namaste';



function App() {
  // const students=[
  //   {
  //     naming:"AAA",
  //     id:"100"
  //   },
  //   {
  //     naming:"BBB",
  //     id:"200"
  //   },
  //   {
  //     naming:"CCC",
  //     id:"300"
  //   }
  // ]
  
   
  

  // const students=[
  //   {
  //     id:001,
  //     name:AAA
  
  //   },
  //   {
  //     id:002,
  //     name:BBB
  //   },
  //   {
  //     id:003,
  //     name:CCC
  
  //   }
  // ]

  const [showDiv, setshowDiv] = useState(false);
 
  
  //    useEffect(()=> {document.title= showDiv});
      
  
  return (
    <div className="App">
      {/* <Hello nameofperson={students.map (( i )=> {i.naming},{i.id}></Hello> */}
      {/* // <Namaste nameofperson={students.map ( i => i.naming,i=>i.id)}></Namaste> */}
      {/* <Hello person={students.map (( i )=> i.naming)}></Hello>  */}
      {/* <h4>{students.map (( i )=> i.naming)}</h4> */}
        {/* <button onClick={ () => setCount(count - 1)}> -1 </button>
        <button onClick={ () => setCount(0)}> Reset </button>
        <button onClick={ () => setCount(count + 1)}> +1 </button> */}
        
        <button className="btn"onClick={()=>setshowDiv(true)}>MOUNT </button><br/><br/>
        <button className="btn" onClick={()=>setshowDiv(false)}>UNMOUNT </button><br/><br/>
        {showDiv ? <Namaste /> : null }
           
        

                    
        
       </div>
  
  );
      }

export default App;
