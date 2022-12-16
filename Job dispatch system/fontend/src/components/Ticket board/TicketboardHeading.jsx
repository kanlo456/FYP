import { Fragment as div } from "react";
import classes from "./TicketboardHeading.module.css";
const TicketboardHeading = () => {
  return (
    <div className={classes["heading"]}>
      <input className={classes["searchbox"]}></input>
      <div className="user">Testing</div>
    </div>
  );
};

export default TicketboardHeading;
