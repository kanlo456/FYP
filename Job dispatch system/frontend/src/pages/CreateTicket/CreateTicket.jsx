import React, { Fragment } from "react";
import TicketForm from "../../components/TicketForm";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const CreateTicket = () => {
  return (
    <Fragment>
      <Box m="1.5rem 2.5rem">
        <Header title="Create Ticket" subtitle="Please fill all information"/>
        <TicketForm />
      </Box>
    </Fragment>
  );
};

export default CreateTicket;
