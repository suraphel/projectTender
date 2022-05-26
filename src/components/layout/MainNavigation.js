import React from "react";
import classes from "./MainNavigation.module.css";

import { NavLink, Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Tender Quotes</Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
              All Tenders
            </NavLink>
          </li>
          <li>
            <NavLink to="/addquotes" activeClassName={classes.active}>
              Add Tenders
            </NavLink>
          </li>
          {/* <li>
              <NavLink to="/" activeClassName={classes.active}>
                Quote
              </NavLink>
            </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
