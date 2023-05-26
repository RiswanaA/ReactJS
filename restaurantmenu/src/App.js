import logo from './logo.svg';
import './App.css';
import Menu  from './Components/Menu';
import Items from './Components/Items';
import Desserts from './Components/Desserts';
import Customerform from './Components/Customerform';
import Stateexample from './Components/Stateexample';
import Statewithfunc from './Components/Statewithfunc';



function App() {
  const fooditems=[
    {
      naming:"DIETFOOD"
    },
    {
      naming:"HAPPY FOOD"
    },
    {
      naming:"SWEET TOOTH"
    }
  ]

  const buy =()=>{
    for(let i=0;i<(fooditems.length);i++){
      if(fooditems[i].naming==="DIETFOOD"){
          
        // 'background-red';
          alert("selected HEALTHY food");
        //  <Items></Items>
        // < Items/>

      }
      // <Items brand={fooditems[1].naming}></Items>
     else{
      // return <Items/>
    //  {   'background-blue';
         alert("selected HAPPY food");
        // <Desserts></Desserts>
     }
    // <Desserts brand={fooditems[2].naming}></Desserts> 
    }
    }
    
  return (
    <div className='Bodystyling' >
    {/* // style={{backgroundImage: `url(${URL})`}} > */}
      <h1>
        YUMMY's!!!!!!!!!!!
      </h1>
     
      {/* <img src="https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg" ></img> */}
      {/* <h4>TYPES OF FOOD: <Menu brand={fooditems.map ( i => i.naming)}></Menu></h4> */}
      
      <Menu brand={fooditems[0].naming}></Menu>
      <Items brand={fooditems[1].naming}></Items>
      <Desserts brand={fooditems[2].naming}></Desserts>
      <Customerform></Customerform>
      <Stateexample></Stateexample>
      <Statewithfunc></Statewithfunc>
     
      
    </div>
  );
}

export default App;
