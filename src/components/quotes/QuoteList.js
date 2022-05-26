// Main page

import { Fragment } from "react";
import { useLocation, useHistory } from "react-router-dom";
import classes from "./QuoteList.module.css";

import QuoteItem from "./QuoteItem";
// import { getAllQuotes } from "../components/lib/api";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  // sorting using query parameters: which is optional

  const queryParams = new URLSearchParams(location.search);
  const isSortAscending = queryParams.get("sort") === "asc"; // what is the value in there.

  const sortedQuotes = sortQuotes(props.quotes, isSortAscending);
  const sortingHandler = () => {
    history.push("/quotes?sort=" + (isSortAscending ? "desc" : "asc")); // this action re-renders the page
  };

  return (
    <Fragment>
      {/*the sort button   */}
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>
          Sort {isSortAscending ? "Decending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
            pdate={quote.pdate}
            fdate={quote.fdate}
            country={quote.country}
            // region={quote.region}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
