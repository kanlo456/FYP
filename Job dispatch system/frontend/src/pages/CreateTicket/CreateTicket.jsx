import React, { Fragment } from "react";
import TicketForm from "../../components/TicketForm";
import Header from "../../components/Header";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { useTheme } from "@emotion/react";
import { red, green } from "@mui/material/colors";

const CreateTicket = () => {
  const theme = useTheme();
  return (
    <Fragment>
      <Box m="1.5rem 2.5rem">
        <Header title="Create Ticket" subtitle="Please fill all information" />
        <Formik>
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form>
              <TicketForm />
              <Box display="flex" justifyContent="flex-end" mt="1rem">
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: red[500],
                    color: "white",
                  }}
                >
                  Cancel Ticket
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: green[500],
                    color: "white",
                    ml: "1rem",
                  }}
                >
                  Create Ticket
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Fragment>
  );
};

export default CreateTicket;

// const initialValues = {
//   caller
// };
