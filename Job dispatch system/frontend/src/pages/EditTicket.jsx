import { Box } from "@mui/system";
import React, { Fragment } from "react";
import Header from "../components/Header";
import TicketForm from "../components/TicketForm";

const EditTicket = () => {
  return (
    <Fragment>
      <Box m="1.5rem 2.5rem">
        <Header title="Edit Your Ticket" subtitle="We will help you soon!" />
        <TicketForm />
      </Box>
    </Fragment>
  );
};

export default EditTicket;
