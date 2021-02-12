import React,{useState} from "react";
import ReactDOM from "react-dom";


const App=()=>{
  const [clicks,setClicks]=useState({left:0,right:0})
   const handleLeftClick=()=>{
    const newClicks={
      left:clicks.left+1,
      right:clicks.right
    }
    setClicks(newClicks)
  }

 const handleRightClick=()=>{
    const newClicks={
      left:clicks.left,
      right:clicks.right+1
    }
    setClicks(newClicks)
  }
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </div>
  )
  
  }
/* const App=()=>{
  const [left,setLeft]=useState(0);
  const [right,setRight]=useState(0);
  return(
    <div>
      {left}
      <button onClick={()=>setLeft(left+1)}>
          left
      </button>
      <button onClick={()=>setRight(right+1)}> 
          right
      </button>
      {right}

    </div>
  )
} */

/* const Display=({counter})=><div>{counter}</div>

const Button=({handleClick,text})=>(
  <button onClick={handleClick}>
    {text}
  </button>
)

const App=()=>{
  const [counter,setCounter]=useState(0);
   const increse=()=>setCounter(counter+1);
   const decrese=()=>setCounter(counter-1);
  const zero=()=>setCounter(0);

   return(
     <div>
       <Display counter={counter}/>
       <Button
          handleClick={increse}
          text="plus"
       />
       <Button
          handleClick={decrese}
          text="minus"
       />
       <Button
          handleClick={zero}
          text="null"
       />

     </div>
   )
} */






/* const App=()=>{
  const [counter,setCounter]=useState(0)
  const increse=()=>setCounter(counter+1)
  const decress=()=>setCounter(counter-1)
  const zero=()=>setCounter(0)

  return(
    <div>
      <div>{counter}</div>
      <button onClick={increse}>
        plus
      </button>
      <button onClick={decress}>
        minus
      </button>
      <button onClick={null}>
        set to zero
      </button>
    </div>
  )
}
 */
ReactDOM.render(<App/>, document.getElementById("root"))