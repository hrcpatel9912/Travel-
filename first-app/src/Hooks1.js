import { useState} from 'react';

export default function Hooks1() {
    const [num, setnum] = useState();
    function factorial(n) {
        var result = n;
        if(n<0) {
            return null;
        }
      if (n === 0 || n === 1){
        return 1;
      }  else {
        while (n >= 2) {
            result = result * (n - 1);
            n--;
        }
        return result;
      }
    }
  return(
    <>
    <h3>write positive no and its factorial bellow</h3>
    <input type="number" onChange={(e) => setnum(e.target.value)} />
    Factorial: {factorial(num) }
    </> 
  );
}
