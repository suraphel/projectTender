// Quote Detail pages

import { useEffect } from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

import useHttp from "../components/hooks/use-http";
import { getSingleQuote } from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

function Away() {
  const params = useParams();

  const { id } = params;
  console.log(id);

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === "pending ") {
    // show the spinner
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
  if (!loadedQuote) {
    return <p>No quote found</p>;
  }

  // const quote = loadedQuote.find((quote) => quote.id === params.id);
  // if (!quote) {
  //   return <p> No quote with such Id</p>;
  // }

  return (
    <section>
      <HighlightedQuote
        text={loadedQuote.text}
        pdate={loadedQuote.pdate}
        fdate={loadedQuote.fdate}
        author={loadedQuote.author}
        description={loadedQuote.description}
        country={loadedQuote.country}
        region={loadedQuote.region}
      />
      <Route path={`/quotes/${params.id}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.id}/comments`}>
            To comments
          </Link>
        </div>
      </Route>
      {/* <h1> Specific page Quote detail with id</h1>
      <h2>{params.id}</h2> */}
      {/* Nested Routes for a specific page  */}
      <Route path={`/quotes/${params.id}/comments`}>
        <Comments />
      </Route>
    </section>
  );
}

export default Away;
