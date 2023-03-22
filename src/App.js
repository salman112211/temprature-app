import React, {useState} from 'react';


const App =() => {

  const [tempValue, settempvalue]=useState(10);
  const [tempColor, settempColor]=useState("cold");

  const increseTemprature=()=>{
    if(tempValue===30) return;
 const newTemprature = tempValue + 1;
    
 if(newTemprature >=15){
      settempColor('hot');
    };

    settempvalue(newTemprature);
  };



  const DcreseTemprature=()=>{
    if(tempValue===0) return;
  const newTemprature = tempValue - 1;
    if(newTemprature <15){
      settempColor('cold');
    };

    settempvalue(newTemprature);
  };

  return(
    <div className="app-container">

<div className="temperature-display-container">

  <div className={`temperature-display ${tempColor}`}>{tempValue}c</div>

</div>

<div className='button-container'>

  <button onClick={()=>increseTemprature() }>+</button>
    <button onClick={()=> DcreseTemprature()}>-</button>


</div>
     
</div>
  )
}


export default App;