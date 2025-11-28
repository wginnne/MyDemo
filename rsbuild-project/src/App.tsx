import {useState} from "react";
import './App.css';

const stack :number[]= [];
const redostack :number[]=[];

const App = () => {
  const [value, setValue] = useState(0);
 
  //react have done something, then it will change the UI automtically

  const SetValueWithStack = (value:number) =>{
    stack.push(value);
    //setValue(value);
  }

  const RedoStack = (value:number) =>{
    redostack.push(value);
  }

  const ClearRedo =() =>{
    while(redostack.length>0){
      redostack.pop();
    }
  }

  return (
      <div className="content">
      <div style={{fontSize: "100px"}}>{value}</div>
      <div 
        style={{
          display: "flex",
          alignItems:"center",
          justifyContent:"center",
          fontSize: "50px"
        }}
        >
        <button onClick={() => {ClearRedo();SetValueWithStack(value);setValue(value+1);}} style={{width:"100px"}}>Plus</button>
        <button onClick={() => {ClearRedo();SetValueWithStack(value);setValue(value-1);}} style={{width:"100px"}}>Minus</button>
        <button onClick={() => {stack.length > 0 &&RedoStack(value);stack.length > 0 &&setValue(stack.pop()!);}} style={{width:"100px"}}>Ondu</button>
        <button onClick={() => {redostack.length > 0 &&SetValueWithStack(value);redostack.length > 0 && setValue(redostack.pop()!)}} style={{width:"100px"}}>Redo</button>
        
        </div>
      </div>
   
  );
};

export default App;
