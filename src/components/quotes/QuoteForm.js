import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import { Fragment } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntered, setIsEntered] = useState(false);

  const authorInputRef = useRef();
  const titleInputRef = useRef();
  const pdate = useRef();
  const fdate = useRef();
  const country = useRef();
  const region = useRef();
  const description = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredpdate = pdate.current.value;
    const enteredfdata = fdate.current.value;
    const enteredcountry = country.current.value;
    const enteredregion = region.current.value;
    const entereddescription = description.current.value;
    // optional: Could validate here
    props.onAddQuote({
      author: enteredAuthor,
      text: enteredTitle,
      pdate: enteredpdate,
      fdate: enteredfdata,
      country: enteredcountry,
      region: enteredregion,
      description: entereddescription,
    });
  }
  const formFocusHandler = () => {
    setIsEntered(true);
    console.log("focus");
  };

  const formReady = () => {
    setIsEntered(false);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntered}
        message={(location) => "You sure want to leave this page"}
      />
      <Card>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Publisher</label>
            <input type="text" id="author" ref={authorInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="author">Publication Date</label>
            <input type="date" id="publicationdate" ref={pdate} />
          </div>
          <div className={classes.control}>
            <label htmlFor="author"> Deadline </label>
            <input type="date" id="date" ref={fdate} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Region</label>
            <input type="text" id="region" ref={region}></input>
          </div>

          <div className={classes.control}>
            <label htmlFor="text">Country</label>
            <input type="country" id="country" ref={country}></input>
          </div>

          <div className={classes.control}>
            <label htmlFor="text">Tender Title</label>
            <input id="text" ref={titleInputRef} required></input>
          </div>

          <div className={classes.control}>
            <label htmlFor="text">Tender Description</label>
            <textarea id="text" rows="5" ref={description} required></textarea>
          </div>

          <div className={classes.actions}>
            <button onClick={formReady} className="btn">
              Add Tender Details
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
