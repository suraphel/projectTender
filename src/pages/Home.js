// AllQuotes

import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";
import NoquoteFound from "../components/quotes/NoQuotesFound";

import LoadingSpinner from "../components/UI/LoadingSpinner";

function Home() {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest(); // send request when ever the page renders
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    <div className="centered focused">
      <p>{error}</p>
    </div>;
  }
  if (status === "completed" && (!loadedQuote || loadedQuote.length === 0)) {
    return <NoquoteFound />;
  }

  return <QuoteList quotes={loadedQuote} />;
}

export default Home;
// const dummyData = [
//   {
//     id: "q1",
//     author: "CBE",
//     text: "Techincal support ",
//   },
//   {
//     id: "q2",
//     author: "EEEPL",
//     text: "Installation",
//   },
//   {
//     id: "q3",
//     author: "Telecommincation",
//     text: "Tender Document",
//   },
// ];

// const fetchedData = getAllQuotes();
// const data = fetchedData.map((ele) => <li>{ele}</li>);

// console.log(data);
