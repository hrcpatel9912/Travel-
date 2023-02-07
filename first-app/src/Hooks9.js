import React, {useState} from 'react';
export default function HOOKs9(){
    const [filterdata, setFilterdata] = useState([]);
    let wordname = "";
    let data = [
        "Harsh",
        "raj",
        "ravi",
        "meet",
        "ayush",
        "dev",
        "avi",
        "jay",
        "jone",
        "rajesh",
        "nisarg",
        "nirav",
        "niramal",
        "ahemdabad",
        "rajkot",
        "abcd",
        "doe",
        "sweety",
        "parth",
        "dinesh",
        "samael",

    ];
    function searchWord(searchword){
        if (searchword !== "")
        {
            wordname = searchword;
            const filteredword = data.filter((item)=>{
                return Object.values(item)
                .join("")
                .toLowerCase()
                .includes(wordname.toLowerCase());
            });
            setFilterdata(filteredword);
        }
    }
    return(
        <>
        <h2>Name Search</h2>
        <input placeholder="Search..." type="text" onChange={(e) =>
        searchWord(e.target.value)} />
        {filterdata.map((word, i) => {
            return <div key={i}>{word}</div>;
        })}
        </>
    );
}