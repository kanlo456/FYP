import { Box } from "@mui/system";
import { Button, Alert, AlertTitle } from "@mui/material";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import TicketForm from "../components/TicketForm";
import { Formik } from "formik";
import { red, green, orange } from "@mui/material/colors";
import axios from "axios";
import { useState } from "react";
import WorkNotes from "../components/WorkNotes";
import CancelAlertBox from "../components/CancelAlertBox";
import TicketBox from "../components/TicketBox";
import { checkTicketSchema } from "../validation/schema/checkTicketSchema";
import { useAuthContext } from "../hooks/useAuthContext";
import { useWorknote } from "../hooks/useWorknote";
import { checkWorkNoteSchema } from "../validation/schema/checkWorkNoteSchema";

const EditTicket = () => {
  const { id } = useParams();
  const [statusOK, setStatusOK] = useState(false);
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState([]);
  const [openCancelAlertBox, setOpenCancelAlertBox] = useState(false);
  const { dispatch, user } = useAuthContext();
  const { createWorknote } = useWorknote();

  useEffect(() => {
    getSingleTicket(id);
  }, [id]);

  const handleWorknoteSubmit = async (values) => {
    await createWorknote(values, id);
  };

  const getSingleTicket = async (id) => {
    const response = await axios.get(`/api/tickets/${id}`);
    const data = response.data;
    setResponseData(data);
  };

  const updateTicket = async (values) => {
    const response = await fetch(`/api/tickets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      setStatusOK(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return setTimeout(() => navigate("/dashboard/ticketboard"), 3000);
    } else {
      console.log("fail");
    }
  };

  const initialTicketValues = {
    caller: responseData.caller,
    category: responseData.category,
    subcategory: responseData.subcategory,
    service: responseData.service,
    offering: responseData.offering,
    configItem: responseData.configItem,
    contactType: responseData.contactType,
    state: responseData.state,
    impact: responseData.impact,
    priority: responseData.priority,
    assignmentGroup: responseData.assignmentGroup,
    assignedTo: responseData.assignedTo,
    description: responseData.description,
    shortDescription: responseData.shortDescription,
  };

  const initialWorkNoteValues = {
    worknote: "",
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
        <Header title="Edit Your Ticket" subtitle="We will help you soon!" />
        <Formik
          initialValues={initialTicketValues}
          validationSchema={checkTicketSchema}
          onSubmit={updateTicket}
          enableReinitialize
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
                  ticketID={id}
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
                    onClick={() => setOpenCancelAlertBox(true)}
                  >
                    Cancel Edit
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
                    Update
                  </Button>
                </Box>
              </TicketBox>
            </form>
          )}
        </Formik>
        <CancelAlertBox
          openCancelAlertBox={openCancelAlertBox}
          setOpenCancelAlertBox={setOpenCancelAlertBox}
          alertText={"Are you sure cancel edit?"}
          alertContent={"Your data will lose!"}
          navigate={"/dashboard/ticketboard"}
        />
        <Header title="Word Notes" subtitle="Please leave your notes here!" />
        <TicketBox>
          <Formik
            initialValues={initialWorkNoteValues}
            validationSchema={checkWorkNoteSchema}
            onSubmit={handleWorknoteSubmit}
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
                <WorkNotes values={values} handleChange={handleChange} />
                <Box display="flex" justifyContent="flex-end" mt="1rem">
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{ backgroundColor: orange[900], color: "white" }}
                  >
                    POST
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </TicketBox>
      </Box>
    </Fragment>
  );
};

export default EditTicket;
