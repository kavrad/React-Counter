import "./App.css";
import Title from "./components/TitleComponent";
import { useState } from "react";

function App() {
  const [count,setCount]=useState(0);
  return (
    <div className="w-[100vw] h-screen flex justify-center items-center flex-col bg-fuchsia-900">
      <Title className='w-2/5 font-semibold font-serif'></Title>
      <div className="w-1/5 flex h-11 m-5 mt-6 rounded">
      
      <button type="click" className='w-2/12 text-center' class='w-24 border-2 h-full bg-fuchsia-600 text-white text-xl font-semibold' onClick={()=>{
         setCount(count+1)
      }}>+</button>

      <button type="click" className='w-2/12 text-center' class='w-24 border-2 h-full bg-fuchsia-600 text-white text-xl font-semibold'>{count}</button>
      <button type="click" className='w-2/12 text-center' class='w-24 border-2 h-full bg-fuchsia-600 text-white text-xl font-semibold' onClick={()=>{
        if(count === 0){
          setCount(0)
        }else{
          setCount(count-1)
        }
        
      }}>-</button>
      </div>
      <button type="click" className="w-1/12 bg-fuchsia-500 h-10 mt-4 font-serif font-semibold text-white text-xl rounded-md" onClick={()=>{
        setCount(0);
      }}>Reset</button>
    </div>
  );
}

export default App;
