import React,{useEffect,useState}from 'react'
function test(){

const [quote,setQuote]=useState("");
useEffect(()=>{
fetch("")

.then((res)=> res.json())
.then((data)=>{
    setQuote(data.content);

})

},[]);

return(


);

}

export default test