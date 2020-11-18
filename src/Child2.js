import React, { useReducer } from 'react'
import numberReducer from './numberReducer';
// import ValueContext from './ValueContext';

function Child2(){
let [state,dispat] =useReducer(numberReducer,53)

    return(
<div>
  child2 is {state}
  <button onClick={()=>{dispat({type:"INCREMENT"});}}>Increment</button>
  
  <button onClick={()=>{dispat({type:"DECREMENT"});}}>decrement</button>
</div>

    )

    
}

export default Child2;