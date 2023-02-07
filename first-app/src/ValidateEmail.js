import {  useState} from 'react';

export default function ValidateEmail() {
    const [email, setEmail] = useState();
    const [validate, setValidate] = useState(false);
    function handlSubmit(e) {
        setEmail(e.target.value);
        console.log(email);
        if (/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setValidate(true);
        }
        else 
        {
            setValidate(false);
        }
    }
  return (
    <>
        <h3>
            Submit button enables only when email in in formaat:abcd@xyz.uv</h3>
        <input placeholder="Enter Email " type="email"
        onChange={handlSubmit}  />
        <button type=" submit" disabled={validate === false}>submit</button>
    </>
  );
}
