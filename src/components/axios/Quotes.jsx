import axios from "axios";
import { useEffect, useState } from "react";
export default function Quotes() {
  const [Quote, setQuote] = useState(null);

  useEffect(()=>{
    const fetchQuote= async ()=>{
        const res= await axios.get('https://api.quotable.io/random');

        setQuote(res.data);
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
