import { useEffect, useState } from "react";

export default function Quotes() {
  const [Quote, setQuote] = useState(null);

  useEffect(()=>{
    const fetchQuote= async ()=>{
        const res= await fetch('https://api.quotable.io/random');
        const data= await res.json();
        setQuote(data);
    }

    fetchQuote()
  },[])
  return (
    <>
      <p>get quotes using default fetch API</p>
      <div>{Quote?.content}</div>
    </>
  );
}
