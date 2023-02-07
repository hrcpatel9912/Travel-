import  { useState } from "react";
import './App.css';
// import h1 from "./image/h1.jpg";
// import h2 from "./image/h2.jpg";


function  Change() {
    const [newTask, setNewTask] = useState();
    const [taskArray, setTaskArray] = useState([]);
    
    function HandleChangeEvent(event) {
        setNewTask(event.target.value)    
    }
    
    function addproduct(){
        setTaskArray([...taskArray,newTask])
    }

    
    return(
        <div>
            <input onChange={HandleChangeEvent} type="textbox"></input>
            <button onClick={addproduct}>Add Task product</button>
            {
                taskArray.map((task)=>{
                  return  (
                    <h2 key ={task}>{task}</h2>
                )})
                  
            }
        </div>
    );
}

export default Change;