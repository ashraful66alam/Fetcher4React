import { useQuery } from "react-query";
import getQuote from "./getQuoteApi";

export default function Quotes({ Quote }) {
  const { data } = useQuery("quote", () => getQuote());
  return (
    <>
      <p>get quotes using default fetch API</p>
      <div>{data?.content}</div>
    </>
  );
}
