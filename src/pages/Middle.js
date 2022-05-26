// NewQuotes page

import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import { addQuote } from "../components/lib/api";
import useHttp from "../components/hooks/use-http";

function Middle() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") history.push("/quotes");
  }, [status, history]);

  const addQuotesHandler = (quoteData) => {
    sendRequest(quoteData);
    // addQuote(quoteData);
    // console.log(quoteData);
  };

  return (
    <>
      <div>Add New Tender Quotes</div>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuotesHandler}
      />
    </>
  );
}

export default Middle;
