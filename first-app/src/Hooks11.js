import { useState} from 'react';
export default function Hooks11(){
    const [num, setNum]= useState(1)
    var arra=[]
    var i=0;

    for(i=1;i<=10;i++)
    {
        var table =`${num} x ${i} = ${num*i}`;
        arra.push(table)
    }

  return (
    <>
    <h1>Find the table of number</h1>
    <input type='number' onChange={e => setNum(e.target.value)}/>
    <br/>

    <table>
        { arra.map((table,i)=>
        {
            return(
                <tr key={i}>{table}</tr>
            )
            })}
    </table>
    </>
  )
}
