export default function Buttons ({increase, decrease }){
    return(
        <>

        <button onClick={increase}> + </button>
        <button onClick={decrease}> - </button>
        </>
    )
}