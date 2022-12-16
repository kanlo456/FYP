import React from "react";
import classes from "./Ticketboard.module.css";
import TicketColumn from "./TicketColumn";
import TicketboardHeading from "./TicketboardHeading";
const Ticketboard = (props) => {
  return (
    <article className={classes["ticketboard"]}>
      <TicketboardHeading/>
      <TicketColumn />
    </article>
  );
};

export default Ticketboard;
