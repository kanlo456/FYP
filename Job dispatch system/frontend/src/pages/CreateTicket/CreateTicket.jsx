import React, { Fragment } from "react";
import TicketForm from "../../components/TicketForm";
import Header from "../../components/Header";
import { Box, Button, Alert, AlertTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useTheme } from "@emotion/react";
import { red, green } from "@mui/material/colors";
import { useState } from "react";
import TicketBox from "../../components/TicketBox";
import CancelAlertBox from "../../components/CancelAlertBox";
import { checkTicketSchema } from "../../validation/schema/checkTicketSchema";
import { useAuthContext } from "../../hooks/useAuthContext";

const CreateTicket = () => {
  const [statusOK, setStatusOK] = useState(false);
  const { dispatch, user } = useAuthContext();
  const theme = useTheme();
  const [openCancelAlertBox, setOpenCancelAlertBox] = useState(false);
  const navigate = useNavigate();
  const handleTicketSubmit = async (values) => {
    const response = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      setStatusOK(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return setTimeout(() => navigate("/dashboard/ticketboard"), 2000);
    }
  };

  return (
    <Fragment>
      {statusOK && (
        <Alert severity="success">
          <AlertTitle>Success Submit ticket</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      )}
      <Box m="1.5rem 2.5rem">
        <Header title="Create Ticket" subtitle="Please fill all information" />
        <Formik
          onSubmit={handleTicketSubmit}
          initialValues={initialValues}
          validationSchema={checkTicketSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <TicketBox>
                <TicketForm
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                <Box display="flex" justifyContent="flex-end" mt="1rem">
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: red[500],
                      color: "white",
                    }}
                    onClick={() => {
                      setOpenCancelAlertBox(true);
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
                    type="submit"
                  >
                    Create Ticket
                  </Button>
                </Box>
              </TicketBox>
            </form>
          )}
        </Formik>
        <CancelAlertBox
          openCancelAlertBox={openCancelAlertBox}
          setOpenCancelAlertBox={setOpenCancelAlertBox}
          alertText={"Are you sure cancel ticket?"}
          alertContent={"Your data will lost!"}
          navigate={"/dashboard/ticketboard"}
        />
      </Box>
    </Fragment>
  );
};

export default CreateTicket;

const initialValues = {
  caller: "",
  category: "",
  subcategory: "",
  service: "",
  offering: "",
  configItem: "",
  contactType: "",
  status: "",
  impact: "",
  priority: "",
  assignmentGroup: "",
  assignedTo: "",
  shortDescription: "",
  description: "",
  limitDate:null
};
