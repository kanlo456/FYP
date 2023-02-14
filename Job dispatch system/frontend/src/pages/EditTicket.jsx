import { Box } from "@mui/system";
import {
  Button,
  Alert,
  AlertTitle,
  Typography,
  TextField,
} from "@mui/material";
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
  const [sendTicketStatusOK, setSendTicketStatusOK] = useState(false);
  const {sendWorkNoteOK,setSendWorkNoteOk} = useState(false);
  const navigate = useNavigate();
  const [responseSingleTicketData, setResponseSingleTicketData] = useState([]);
  const [responseWorkNotesData, setResponseWorkNotesData] = useState([]);
  const [openCancelAlertBox, setOpenCancelAlertBox] = useState(false);
  const { dispatch, user } = useAuthContext();
  const { createWorknote } = useWorknote();

  useEffect(() => {
    getSingleTicket(id);
    getSingleWorkNote(id);
    // getSingleWorkNote(id)
    
  }, [id]);

  const handleWorknoteSubmit = async (values) => {
    await createWorknote(values.worknote, id);
    // sendWorkNoteOK(true);
  };

  const handleUpdateTicket = async (values) => {
    const response = await fetch(`/api/tickets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      setSendTicketStatusOK(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return setTimeout(() => navigate("/dashboard/ticketboard"), 3000);
    } else {
      console.log("fail");
    }
  };
  const getSingleTicket = async (id) => {
    const response = await axios.get(`/api/tickets/${id}`);
    setResponseSingleTicketData(response.data);
  };

  const getSingleWorkNote = async (id) => {
    const response = await axios.get(`/api/worknotes/`);
    const data = response.data;
    setResponseWorkNotesData(data);
  };

  // console.log(responseWorkNotesData);

  const showWorkNotes = responseWorkNotesData.map((data) => (
    <TextField
      fullWidth
      // new Date(params?.value).toLocaleString()
      value={`${new Date(data.createdAt).toLocaleString()}\n${data.notes}`}
      name="workedNote"
      disabled
      multiline
      inputProps={{
        style: {
          height: "5vh",
        },
      }}
      sx={{
        mt: "10px",
      }}
    />
  ));

  const initialTicketValues = {
    caller: responseSingleTicketData.caller,
    category: responseSingleTicketData.category,
    subcategory: responseSingleTicketData.subcategory,
    service: responseSingleTicketData.service,
    offering: responseSingleTicketData.offering,
    configItem: responseSingleTicketData.configItem,
    contactType: responseSingleTicketData.contactType,
    status: responseSingleTicketData.status,
    impact: responseSingleTicketData.impact,
    priority: responseSingleTicketData.priority,
    assignmentGroup: responseSingleTicketData.assignmentGroup,
    assignedTo: responseSingleTicketData.assignedTo,
    description: responseSingleTicketData.description,
    shortDescription: responseSingleTicketData.shortDescription,
    limitDate:responseSingleTicketData.limitDate
  };

  const initialWorkNoteValues = {
    worknote: "",
  };

  return (
    <Fragment>
      {sendTicketStatusOK && (
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
          onSubmit={handleUpdateTicket}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue
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
                  setFieldValue={setFieldValue}
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
          alertContent={"Your data will lost!"}
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
          <Typography variant="h4">Activites:</Typography>
          {showWorkNotes}
        </TicketBox>
      </Box>
    </Fragment>
  );
};

export default EditTicket;
