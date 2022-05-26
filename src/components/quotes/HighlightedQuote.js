// view details page

import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>
        <b>Procurement Summary:</b>
      </p>
      <p> Title : {props.text}</p>
      <p> Published : {props.pdate}</p>
      <p> Deadline: {props.fdate}</p>
      <p> Descriptions: {props.description}</p>
      <figcaption>
        {props.author} {props.region}
      </figcaption>
      <figcaption>{props.region}</figcaption>
      <figcaption>{props.country}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
