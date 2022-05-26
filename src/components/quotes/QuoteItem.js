import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  // adding sorting: this time by using query parameter

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <p>Published : {props.pdate}</p>
        <p style={{ color: "red" }}>Deadline : {props.fdate}</p>
        <figcaption> {props.author}</figcaption>
        <figcaption>{props.country}</figcaption>
        {/* <figcaption>Region : {props.region}</figcaption> */}
        <blockquote>
          <p>{props.description}</p>
        </blockquote>
      </figure>
      <Link to={`/quotes/${props.id}`} className="btn">
        View Details
      </Link>
    </li>
  );
};

export default QuoteItem;
