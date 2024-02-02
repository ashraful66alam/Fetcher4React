import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";
export default function Quotes() {
  const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data
  };
  const {data , error} = useSWR("https://api.quotable.io/random", fetcher , {
    suspense:true,
  });
  // console.log(data)

  if(error){
    return <p>there was an error</p>
  }
  return (
    <>
      <p>get quotes using default fetch API & SWR </p>
      <div>{data.content}</div>
    </>
  );
}
