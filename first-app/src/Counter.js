import { useState } from "react";
import Buttons from "./Buttons.js"
export default function Counter() {
    const [count , setcount]= useState(0)
    function increase(){
        setcount (count=>count +1)
    }
    function decrease(){
        setcount (count => count -1)
    }
    return(
        <>
        <div>
            <h3>Example of counter but the increase and decrease buttons 
                are in a child component.</h3>
                <h1>
                    {count}</h1>
                    <Buttons 
                    increase= {increase}
                    decrease= {decrease}
                    />
        </div>
        </>
    );
}